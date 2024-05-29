import Cards from "./components/cards";
import { Header } from "./components/header/Header";
import { useEffect, useState } from 'react';
import cards from "./constants/cards.json"
import MovieInfo from "./components/movieInfo/MovieInfo";
import style from "./app.module.css"

export default function App() {

  const [modal, setModal] = useState();
  
  return (
    <>
      {modal !== undefined && <MovieInfo data={cards[modal]} close={() => setModal()}/>}
      
      <Header/>
     
        <strong className={style.title}>movies in theaters</strong>
      

        <div className={style.wrapCards}>
          {cards.map((item, index) =>{
            return(
              <div key={index}>
                <Cards title={item.title} image={item.image}/>
                <button onClick={() => setModal(index)}>BUTTON</button>
              </div>
            )
          })}


           
        </div>
      
      
    </>
  )
}