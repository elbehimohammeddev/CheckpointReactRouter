import {useState} from 'react';
import {MovieList} from "./MovieList";
import {Search} from "./Search";
import { movieData } from '../Data';
import {AddMovie} from "./AddMovie";

function Home() {
  const [movies, setMovie] = useState(movieData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState(0);
  const add=(newMovie)=>{setMovie(movie=>([...movie,newMovie]))};

  return (
    <div className="Home">
      <Search setSearchRating={setSearchRating} searchRating={searchRating} setSearchTitle={setSearchTitle} />
      <MovieList searchRating={searchRating} searchTitle={searchTitle} movies={movies} />
      <AddMovie add={add}/>
    </div>
  );
}

export default Home;
