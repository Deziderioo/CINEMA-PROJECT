import { useEffect, useState } from 'react';
import style from "./topcards.module.css";
import { XCircle } from "@phosphor-icons/react";
import Draggable from 'react-draggable'; 
import { useNavigate } from 'react-router-dom';

export default function MovieInfo(props) {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // check initial size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCreditsClick = () => {
        if (props.idMovie) {
            navigate(`/credits/${props.idMovie}`);
        } else {
            console.error('movieId is not defined');
        }
    };

    return (
        <Draggable disabled={isMobile}>
            <div className={style.wrap}>
                <button onClick={props.onClose} className={style.closeButton}>
                    <XCircle size={23} weight="fill" />
                </button>
                <strong>{props.title}</strong>
                <img src={props.image} alt="" onClick={props.onImageClick} />
                <ul className={style.sinopse}><p>{props.sinopse}</p></ul>
                <div>
                    <p className={style.releaseDateStyle}>Release Date</p>
                    <p>{props.releaseDate}</p>
                </div>
                <button className={style.creditsButton} onClick={handleCreditsClick}>credits</button>   
            </div>
        </Draggable>
    );
}
