import style from "./TopFilms.module.css";
import { useState, useEffect } from "react";
import Cards from "./components/cards/cards";
import MovieInfo from "./components/cards/topcards";
import { getUpcomingMovies } from './services/tmdb'; // Alterado para getUpcomingMovies

import { Header } from "./components/header/Header";

export default function TopFilms(){

    const [upcomingMovies, setUpcomingMovies] = useState([]); // Alterado para upcomingMovies
    const [modal, setModal] = useState();

    useEffect(() => {
        const fetchUpcomingMovies = async () => {
            try {
                const movies = await getUpcomingMovies(); // Alterado para getUpcomingMovies
                setUpcomingMovies(movies);
            } catch (error) {
                console.error('Error fetching upcoming movies:', error);
            }
        };

        fetchUpcomingMovies();
    }, []);

    return(
        <>
            <Header/>
            <div className={style.Title}> 
                <strong>Upcoming Movies</strong> {/* Alterado para "Upcoming Movies" */}
            </div>

            {modal !== undefined && (
                <MovieInfo 
                    idMovie={upcomingMovies[modal].id} // Passa o id do filme para o MovieInfo
                    title={upcomingMovies[modal].title} 
                    image={upcomingMovies[modal].poster_url}
                    sinopse={upcomingMovies[modal].overview}
                    releaseDate={upcomingMovies[modal].release_date}
                    onClose={() => setModal(undefined)}
                    onImageClick={() => console.log("Imagem Clicada")}
                />
            )}

            <div className={style.wrapCards}>
                {upcomingMovies.map((movie, index) => (
                    <div key={index} onClick={() => setModal(index)}>
                        <Cards title={movie.title} image={movie.poster_url}/>
                    </div>
                ))}
            </div>
        </>
    );
}
