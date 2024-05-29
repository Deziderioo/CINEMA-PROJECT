import style from "./TopFilms.module.css"
import Cards from "./components/cards/cards";

import { Header } from "./components/header/Header";

export default function TopFilms(){
    return(
        <>
            <Header/>
            <div className={style.wrapTitle}> 
               <strong>Top Movies</strong>
            </div>
            <div className={style.wrapCards}>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </>
        )
}