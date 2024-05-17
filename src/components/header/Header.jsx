import styles from "./Header.module.css";

import { FaRegUser } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { RiMovie2Line } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";

export function Header() {
  return (
    <div>
        <header className={styles.header}>
          
            <div className={styles.wrapLogo}>
             <RiMovie2Line className={styles.iconLogo} size={60}/>
            </div>
            <div className={styles.wrapA}>
              <a href=""> <GoHomeFill size={20}/> Home</a>
              
              <a href=""> Top filmes</a>
            </div>
             <FaRegUser className={styles.icon}size={23}/>
        </header>
    </div>
        
  );
}