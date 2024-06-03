import { useState } from 'react';
import style from "./Login.module.css";
import { Header } from "./components/header/Header";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const account = JSON.parse(localStorage.getItem('account'));

    if (account && account.email === email && account.password === password) {
      alert('Login bem-sucedido!');
    } else {
      alert('Email ou senha incorretos!');
    }
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
        <button type="submit">Login</button>
        <button href="/NewAccount">Create</button>
        <a href="/NewAccount">seila</a>  
      </form>
    </div>
  );
}