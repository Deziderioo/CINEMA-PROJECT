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

// Rotas para outras operações do banco de dados...

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
