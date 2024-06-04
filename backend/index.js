const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors'); // Importe o pacote cors
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Use o middleware cors

// Conectando ao banco de dados SQLite
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT UNIQUE, password TEXT)");
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
      res.json({ message: 'Login bem-sucedido!' });
    } else {
      res.status(400).json({ message: 'Email ou senha incorretos!' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
