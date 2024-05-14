import styles from "./Header.module.css";
import {User} from "@phosphor-icons/react"

export function Header() {
  return (
    <div>
        <header className={styles.header}>
            <input type="text" />
           <User size={27} color="#00B37E"/>
        </header>
    </div>
        
  );
}