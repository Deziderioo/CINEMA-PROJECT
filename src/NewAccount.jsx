import { useState } from 'react';
import style from "./NewAccount.module.css";
import { Header } from "./components/header/Header";

export function NewAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert('Conta criada com sucesso!');
    } else {
      alert(data.error);
    }
  };

  return (
    <div>
      <Header />

      <div className={style.wrapTitle}>
        <strong>new account</strong>
      </div>
      <form className={style.card} onSubmit={handleSubmit}>
        <div className={style.wrapInp}>
          <label htmlFor="name">Name</label>
          <input
            placeholder="Ronald"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
