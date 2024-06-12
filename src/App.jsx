import { useEffect, useState } from 'react';
import { getPopularMovies, getMovieVideos } from './services/tmdb'; // Importar a função getMovieVideos também

import { Header } from "./components/header/Header";
import Cards from "./components/cards/cards";
import MovieInfo from "./components/movieInfo/MovieInfo";
import style from "./app.module.css";

export default function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [modal, setModal] = useState(undefined);
  const [trailerKey, setTrailerKey] = useState(null); // Estado para armazenar a chave do trailer

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

  const handleModalOpen = async (index) => {
    setModal(index);
    try {
      const videos = await getMovieVideos(popularMovies[index].id); // Obter os vídeos do filme
      const trailer = videos.find(video => video.type === 'Trailer'); // Procurar pelo vídeo do tipo 'Trailer'
      if (trailer) {
        setTrailerKey(trailer.key); // Se encontrar, definir a chave do trailer
      } else {
        setTrailerKey(null); // Se não encontrar, definir como null
      }
    } catch (error) {
      console.error('Error fetching movie videos:', error);
      setTrailerKey(null);
    }
  };

  const handleModalClose = () => {
    setModal(undefined);
    setTrailerKey(null); // Resetar a chave do trailer ao fechar o modal
  };

  return (
    <>
      <div className={style.body}>
        {modal !== undefined && (
          <MovieInfo 
            idMovie={popularMovies[modal]?.id} // Corrigir para passar o ID do filme ao invés do título
            title={popularMovies[modal]?.title} 
            image={popularMovies[modal]?.poster_url}
            sinopse={popularMovies[modal]?.overview}
            trailerKey={trailerKey}
            onClose={handleModalClose}
            onImageClick={() => console.log("Imagem Clicada")}
          />
        )}
        
        <Header />
        <strong className={style.title}>Movies in Theaters</strong>
        <div className={style.wrapCards}>
          {popularMovies.map((movie, index) => (
            <div key={index} onClick={() => handleModalOpen(index)}> {/* Atualizar para chamar handleModalOpen com o índice */}
              <Cards title={movie.title} image={movie.poster_url} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
