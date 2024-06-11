import { useState } from 'react';
import style from "./MovieInfo.module.css";
import { Ticket, XCircle } from "@phosphor-icons/react";
import Draggable from 'react-draggable';

export default function MovieInfo(props) {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const handleTrailerOpen = () => {
    setIsTrailerOpen(true);
  };

  const handleTrailerClose = () => {
    setIsTrailerOpen(false);
  };

  return (
    <Draggable>
      <div className={style.wrap}>
        <div className={style.wrapCloseButton}>
          <button onClick={props.onClose} className={style.closeButton}>
            <XCircle size={24} weight="fill" />
          </button>
        </div>
        <strong>{props.title}</strong>
        <img src={props.image} alt="" onClick={props.onImageClick} />
        <ul className={style.sinopse}><p>{props.sinopse}</p></ul>
        <a href="#" onClick={handleTrailerOpen}>Assista o trailer</a> {/* Adicione um evento onClick para abrir o modal do trailer */}
        <button className={style.button}>
          <Ticket size={19} weight="light" />
          <a href="/moviebooking">Reservar assento</a>
        </button>

        {isTrailerOpen && (
          <div className={style.trailerModal}>
            <button onClick={handleTrailerClose} className={style.closeButton}>
              <XCircle size={24} weight="fill" />
            </button>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${props.trailerId}`}
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        )}
      </div>
    </Draggable>
  );
}
