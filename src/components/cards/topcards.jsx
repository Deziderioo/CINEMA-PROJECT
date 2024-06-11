import style from "./topcards.module.css";
import { XCircle } from "@phosphor-icons/react";
import Draggable from 'react-draggable'; 

export default function MovieInfo(props) {
    return (
        <Draggable>
            <div className={style.wrap}>
                <button onClick={props.onClose} className={style.closeButton}>
                    <XCircle size={24} weight="fill" />
                </button>
                <strong>{props.title}</strong>
                <img src={props.image} alt="" onClick={props.onImageClick} />
                <ul className={style.sinopse}><p>{props.sinopse}</p></ul>
                <p>{props.autor}</p>
                <p>{props.elenco}</p>
            </div>
        </Draggable>
    );
}
