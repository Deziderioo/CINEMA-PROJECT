import style from "./TopFilms.module.css"
import { useState, useEffect } from "react";
import Cards from "./components/cards/cards";
import MovieInfo from "./components/cards/topcards";
import { getPopularMovies } from './services/tmdb';

import { Header } from "./components/header/Header";

export default function TopFilms(){

    const [popularMovies, setPopularMovies] = useState([]);
  
    const [modal, setModal] = useState();
  
    useEffect(() => {
      const fetchPopularMovies = async () => {
        try {
          const movies = await getPopularMovies();
          setPopularMovies(movies);
        } catch (error) {
          console.error('Error fetching popular movies:', error);
        }
      };
  
      fetchPopularMovies();
    }, []);
  
    return(
        <>
            <Header/>
            <div className={style.wrapTitle}> 
               <strong>Top Movies</strong>
            </div>

            {modal !== undefined && (
        <MovieInfo 
          title={popularMovies[modal].title} 
          image={popularMovies[modal].poster_url}
          sinopse={popularMovies[modal].overview}
          onClose={() => setModal(undefined)}
          onImageClick={() => console.log("Imagem Clicada")}
        />
      )}
      
      
    
      
      <div className={style.wrapCards}>
        {popularMovies.map((movie, index) => (
          <div key={index} onClick={() => setModal(index)}>
            <Cards title={movie.title} image={movie.poster_url}/>
          </div>
        ))}
      </div>
           
        </>
        )
}