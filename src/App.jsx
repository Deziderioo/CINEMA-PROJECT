import { useEffect, useState } from 'react';
import { getPopularMovies } from './services/tmdb';
import { Header } from "./components/header/Header";
import Cards from "./components/cards/cards";
import MovieInfo from "./components/movieInfo/MovieInfo";
import style from "./app.module.css";

export default function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modal, setModal] = useState();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const movies = await getPopularMovies();
        setPopularMovies(movies.slice(0, 5));
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  

  return (
    <>
      {modal !== undefined && (
        <MovieInfo 
          title={popularMovies[modal].title} 
          image={popularMovies[modal].poster_url}
          sinopse={popularMovies[modal].overview}
          onClose={() => setModal(undefined)}
          onImageClick={() => console.log("Imagem Clicada")}
        />
      )}
      
      <Header/>
      <strong className={style.title}>Movies in Theaters</strong>
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