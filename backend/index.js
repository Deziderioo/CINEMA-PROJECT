const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Permite todas as origens durante o desenvolvimento

// Conectar ao banco de dados SQLite em um arquivo no disco
const dbPath = './meu-banco-de-dados.db';
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conexão bem-sucedida com o banco de dados SQLite.');
    // Cria a tabela se ela não existir
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT UNIQUE, password TEXT)");
    // Cria a tabela de assentos se ela não existir
    db.run("CREATE TABLE IF NOT EXISTS assentos (id INTEGER PRIMARY KEY AUTOINCREMENT, numero TEXT, reservado BOOLEAN)");
  }
});

// Rota para criar uma nova conta
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  db.run('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password], function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
});

// Rota para fazer login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (row) {
      res.status(200).json({ message: 'Login bem-sucedido!', user: row });
    } else {
      res.status(400).json({ error: 'Email ou senha incorretos!' });
    }
  });
});

// Rota para reservar um assento
app.post('/api/moviebooking/:numeroAssento', (req, res) => {
  const { numeroAssento } = req.params;

  // SQL para atualizar o status do assento para reservado no banco de dados
  const sql = `UPDATE assentos SET reservado = 1 WHERE numero = ?`;

  // Executar a consulta SQL
  db.run(sql, [numeroAssento], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: `Assento ${numeroAssento} reservado com sucesso!` });
  });
});




app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
