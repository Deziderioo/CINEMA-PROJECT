import style from "./MovieInfo.module.css"
import Draggable from 'react-draggable'; 

export default function MovieInfo(props){
    return(
        <Draggable>
           <div className={style.wrap}>
            <strong>{props.title}</strong>
            <img src={props.image} alt=""/>
            <p>{props.sinopse}</p>
            <p>{props.autor}</p>
            <p>{props.elenco}</p>

            <button><a href="">Reservar assento</a></button>
           </div>
        </Draggable>
    )
}