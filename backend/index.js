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
    
    db.run("CREATE TABLE IF NOT EXISTS assentos (id INTEGER PRIMARY KEY AUTOINCREMENT, numeroAssento TEXT, reservado BOOLEAN, dataReserva DATE)");  
    
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

app.post('/api/toreserve', async (req, res) => {
  const { numerosAssentos } = req.body; 

  if (!numerosAssentos) {
    return res.status(400).json({ error: 'Nenhum assento selecionado para reserva' });
  }

  const dataReserva = new Date().toISOString(); 
  const reservas = [];

  try {
    // Usando Promise.all para garantir que todas as inserções sejam concluídas antes de enviar a resposta
    await Promise.all(numerosAssentos.map(async (numeroAssento) => {
      await new Promise((resolve, reject) => {
        db.run("INSERT INTO assentos (numeroAssento, reservado, dataReserva) VALUES (?, ?, ?)", [numeroAssento, true, dataReserva], (err, row) => {
          if (err) {
            reservas.push(`Erro ao reservar assento ${numeroAssento}: ${err.message}`);
            reject(err);
          } else {
            reservas.push(`Assento ${numeroAssento} reservado com sucesso`);
            resolve();
          }
        });
      });
    }));

    // Se todas as reservas foram bem-sucedidas, envie a resposta com as mensagens de reserva
    res.status(200).json({ messages: reservas });
  } catch (error) {
    // Se ocorrer algum erro durante o processo de reserva, envie uma resposta de erro
    res.status(500).json({ error: 'Erro ao processar a reserva de assentos' });
  }
});


// Rota para alterar a senha
app.post('/api/change-password', (req, res) => {
  const { email, oldPassword, newPassword } = req.body;
  
  // Verificar se a senha antiga está correta
  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, oldPassword], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(400).json({ error: 'Senha antiga incorreta!' });
    }
    
    // Atualizar a senha
    db.run('UPDATE users SET password = ? WHERE email = ?', [newPassword, email], function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Senha alterada com sucesso!' });
    });
  });
});

// Rota para deletar o usuário
app.post('/api/delete-user', (req, res) => {
  const { email } = req.body;
  db.run('DELETE FROM users WHERE email = ?', [email], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Usuário deletado com sucesso!' });
  });
});



app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
