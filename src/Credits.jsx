import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from "./Credits.module.css";
import { Header } from "./components/header/Header";
import { getMovieCredits } from './services/tmdb';

const Credits = () => {
    const { movieId } = useParams();
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        const fetchCredits = async () => {
            try {
                const creditsData = await getMovieCredits(movieId);
                setCredits(creditsData);
            } catch (error) {
                console.error('Error fetching movie credits:', error);
            }
        };

        fetchCredits();
    }, [movieId]);

    return (
        <>
            <Header />
            <div className={style.creditsContainer}>
              <strong className={style.title}>credits</strong>
                <div className={style.cardsContainer}>
                    {credits.map(credit => (
                        <div key={credit.id} className={style.card}>
                            {credit.profile_path ? (
                                <img src={`https://image.tmdb.org/t/p/w200${credit.profile_path}`} alt={credit.name} className={style.profileImage} />
                            ) : (
                                <div className={style.noImage}>No Image</div>
                            )}
                            <div className={style.cardContent}>
                                <h2>{credit.name}</h2>
                                <p>{credit.character}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Credits;
