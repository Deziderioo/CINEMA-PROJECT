import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./User.module.css";
import { Header } from "./components/header/Header";

export function User() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleChangePassword = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/api/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, newPassword })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        alert(data.message);
      } else {
        alert(data.error);
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Erro ao alterar a senha.');
    });
  };

  const handleDeleteUser = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/api/delete-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        alert(data.message);
        navigate('/home');
      } else {
        alert(data.error);
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Erro ao deletar usuário.');
    });
  };

  return (
    <div>
      <Header />

      <div className={style.wrapTitle}>
        <strong>User Settings</strong>
      </div>
      <form className={style.card} onSubmit={handleChangePassword}>
        <div className={style.wrapInp}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.wrapInpPass}>
          <label htmlFor="newPassword">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className={style.buttonlogin}>
          <button type="submit">Change Password</button>
        </div>
      </form>
      <button className={style.deleteButton} onClick={handleDeleteUser}>Delete Account</button>
    </div>
  );
}
