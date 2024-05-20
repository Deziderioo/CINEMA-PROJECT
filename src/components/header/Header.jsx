import styles from "./Header.module.css";
import { FilmReel, User, Ticket } from "@phosphor-icons/react";

import { FaRegUser } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";

export function Header() {
  return (
    <div>
        <header className={styles.header}>
          
            <div className={styles.wrapLogo}>
            <FilmReel  className={styles.iconLogo} size={60} color="#00875f" weight="light" />
            
            </div>
            <div className={styles.wrapA}>
              <a href="">Home</a>
              <a href="">contact</a>              
              <a href="">top films</a>
            </div>
            <div className={styles.icon}>
              <Ticket size={32} color="#00875f" weight="light" />
              <User size={32} color="#00875f" weight="light" />
            </div>
        </header>
    </div>
        
  );
}