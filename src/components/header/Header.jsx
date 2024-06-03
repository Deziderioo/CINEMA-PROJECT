import styles from "./Header.module.css";
import { FilmReel, User, Ticket } from "@phosphor-icons/react";


export function Header() {
  return (
    <div>
        <header className={styles.header}>
          
            <div className={styles.wrapLogo}>
            <FilmReel  className={styles.iconLogo} size={50} color="#00875f" weight="light" />
            
            </div>
            <div className={styles.wrapA}>
              <a href="/home">Home</a>
              <a href="/contact">contact</a>              
              <a href="/topfilms">top</a>
            </div>
            <div className={styles.icon}>
              <button><a href=""><Ticket size={25}  weight="light"/></a></button>
              <button><a href="/newaccount"><User size={25}  weight="light" /></a></button>
            </div>
        </header>
    </div>
        
  );
}