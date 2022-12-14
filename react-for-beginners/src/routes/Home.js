import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Movie from "../component/Movie.js"

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json()
    setMovies(response.data.movies);
    setLoading(false); 
  }

  useEffect(() => {
    getMovies();
  }, []);

  const Movies = () => {
    // console.log('movies: ', movies);
    return (
      <div>
        {
          movies.map((movie) => <Movie key={movie.id} movie={movie} />)
        }
        
      </div>
    )
  }


  return (
    <div>
      <h1>Home</h1>
      {loading ? <h1>Loading... </h1> : <Movies />}
      <Outlet />
    </div>
  );
}

export default Home;