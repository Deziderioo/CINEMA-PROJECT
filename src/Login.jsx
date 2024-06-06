import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./Login.module.css";
import { Header } from "./components/header/Header";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
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
      alert('Erro ao fazer login.');
    });
  };

  const handleCreateAccount = () => {
    navigate('/newaccount');
  };

  return (
    <div>
      <Header />

      <div className={style.wrapTitle}>
        <strong>Login</strong>
      </div>
      <form className={style.card} onSubmit={handleSubmit}>
        <div className={style.wrapInp}>
          <label htmlFor="email">E-mail</label>
          <input
            placeholder="Ronald@popflix.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.wrapInpPass}>
          <label htmlFor="password">Password</label>
          <input
            placeholder="*****"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={style.buttonlogin}>
          <button type="submit">Login</button>
          <button type="button" onClick={handleCreateAccount}>Create Account</button>
        </div>
      </form>
    </div>
  );
}
