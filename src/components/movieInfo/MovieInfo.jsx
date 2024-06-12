import { useState, useEffect } from 'react';
import { Ticket, XCircle } from "@phosphor-icons/react";
import { getMovieVideos } from '../../services/tmdb';

import style from "./MovieInfo.module.css";
import Draggable from 'react-draggable';

export default function MovieInfo(props) {
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);

  const handleTrailerOpen = async () => {
    setIsTrailerOpen(true);
    try {
      const videos = await getMovieVideos(props.idMovie);
      const trailer = videos.find(video => video.type === 'Trailer');
      if (trailer) {
        setTrailerKey(trailer.key);
      } else {
        setTrailerKey(null);
      }
    } catch (error) {
      console.error('Error fetching movie videos:', error);
      setTrailerKey(null);
    }
  };

  const handleTrailerClose = () => {
    setIsTrailerOpen(false);
  };

  useEffect(() => {
    // Reset trailer key when closing modal
    if (!isTrailerOpen) {
      setTrailerKey(null);
    }
  }, [isTrailerOpen]);

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
        <button className={style.linkButton} onClick={handleTrailerOpen}>Assista o trailer</button>
        <button className={style.button}>
          <Ticket size={19} weight="light" />
          <a href="/moviebooking">Reservar assento</a>
        </button>
        
        {isTrailerOpen && (
          <div className={style.trailerContainer}>
            <button onClick={handleTrailerClose} className={style.closeButtonTrailer}>
              <XCircle size={24} weight="fill" />
            </button>
            {trailerKey ? (
              <iframe 
                className={style.trailerIframe} // Adicionei uma classe específica para o iframe
                title="Trailer"
                width="800"
                height="450"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              <p>O trailer não está disponível.</p>
            )}
          </div>
        )}
      </div>
    </Draggable>
  );
}
