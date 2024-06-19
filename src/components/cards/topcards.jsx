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
                <div>
                    <p className={style.releaseDateStyle}>Release Date</p>
                    <p>{props.releaseDate}</p>
                </div>
                <button className={style.creditsButton}><a href="/credits">credits</a></button>
                
            </div>
        </Draggable>
    );
}
