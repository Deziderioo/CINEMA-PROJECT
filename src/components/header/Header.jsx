import { useState } from 'react';
import styles from "./Header.module.css";
import { FilmReel, User, Ticket, List } from "@phosphor-icons/react";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.wrapLogo}>
          <FilmReel className={styles.iconLogo} size={50} color="#00875f" weight="light" />
        </div>
        <div className={`${styles.wrapA} ${menuOpen ? styles.active : ''}`}>
          <a href="/home">Home</a>
          <a href="/contact">Contact</a>              
          <a href="/topfilms">Up Coming</a>
        </div>
        <div className={styles.icon}>
          <button><a href=""><Ticket size={25} weight="light"/></a></button>
          <button><a href="/login"><User size={25} weight="light" /></a></button>
          <button className={styles.hamburger} onClick={toggleMenu}>
            <List size={25} weight="light" />
          </button>
        </div>
      </header>
    </div>
  );
}
