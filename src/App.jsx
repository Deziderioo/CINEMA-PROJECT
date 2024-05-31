import Cards from "./components/cards/cards";
import { Header } from "./components/header/Header";
import { useEffect, useState } from 'react';
import cards from "./constants/cards.json"
import MovieInfo from "./components/movieInfo/MovieInfo";
import style from "./app.module.css"

export default function App() {

  const [modal, setModal] = useState();
  
  return (
    <>
      {modal !== undefined && <MovieInfo data={cards[modal]} close={() => setModal()} 
      title={cards[modal].title} 
      image={cards[modal].image}
      sinopse={cards[modal].moreInfo.sinopse}
      autor={cards[modal].moreInfo.autor}
      elenco={cards[modal].moreInfo.elenco}

      
      />}
      
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