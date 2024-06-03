import style from "./MovieInfo.module.css"
import {Ticket } from "@phosphor-icons/react";
import Draggable from 'react-draggable'; 

export default function MovieInfo(props){
    return(
        <Draggable>
           <div className={style.wrap}>
            <strong>{props.title}</strong>
            <img src={props.image} alt="" onClick={props.onImageClick}/>
            <ul className={style.sinopse}><p>{props.sinopse}</p></ul>
            <p>{props.autor}</p>
            <p>{props.elenco}</p>
            
             <button><Ticket size={19}  weight="light"/><a href="/moviebooking">Reservar assento</a></button>
            </div>
        </Draggable>
    )
}