import { useEffect, useState } from "react";

function App() {

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
    console.log('movies: ', movies);
    return (
      <div>
        {
          movies.map((movie) => 
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <img src={movie.medium_cover_image} />
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map(g => <li key={g}>{g}</li>)}
              </ul>
            </div>
          )
        }
      </div>
    )
  }

  console.log('movies: ', movies);

  return (
    <div>
      {loading ? <h1>Loading... </h1> : <Movies />}
    </div>
  );
}

export default App;
