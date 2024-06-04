import { useState } from 'react';
import style from "./Login.module.css";
import { Header } from "./components/header/Header";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
    } else {
      alert(data.message);
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
        <a href='/newaccount'>Create</a>
      </form>
    </div>
  );
}
