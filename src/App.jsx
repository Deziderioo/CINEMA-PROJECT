import Cards from "./components/cards";
import { Header } from "./components/header/Header";
import { useEffect, useState } from 'react';
import cards from "./constants/cards.json"

import style from "./app.module.css"

export default function App() {

  const [modal, setModal] = useState();
  

  return (
    <>
      {modal !== undefined && <ModalInfo data={moreInfo[modal]} close={() => setModal()}/>}
      
      <Header/>
     
        <strong className={style.title}>movies in theaters</strong>
      

        <div className={style.wrapCards}>
          {cards.map((item, index) =>{
            console.log(index)
            return(
              <>
                <Cards title={item.title} onclick={() => {}} image={item.image} />
                
              </>
            )
          })}


           
        </div>
      
      
    </>
  )
}