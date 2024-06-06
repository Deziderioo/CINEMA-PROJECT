import style from "./topcards.module.css"

import Draggable from 'react-draggable'; 

export default function MovieInfo(props){
    return(
        <Draggable >
           <div className={style.wrap}>
            <strong>{props.title}</strong>
            <img src={props.image} alt="" onClick={props.onImageClick}/>
            <ul className={style.sinopse}><p>{props.sinopse}</p></ul>
            <p>{props.autor}</p>
            <p>{props.elenco}</p>
            
            
            </div>
        </Draggable>
    )
}