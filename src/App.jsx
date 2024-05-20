import Cards from "./components/cards/cards";
import { Header } from "./components/header/Header";


import style from "./app.module.css"

export default function App() {
  

  return (
    <>
      
      <Header/>
     
        <strong className={style.title}>movies in theaters</strong>
      
      
        <div className={style.wrapCards}>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
       
        </div>
      
      
    </>
  )
}

