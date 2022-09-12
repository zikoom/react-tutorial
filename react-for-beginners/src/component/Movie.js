import {Link} from "react-router-dom"

function Movie({movie}) {
  // console.log('in Movie Component. props moive: ', movie);
  return (
    <div>
      {
        <div>
          <h2>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
          </h2>
          <img src={movie.medium_cover_image} />
          <p>{movie.summary}</p>
          <ul>
            {movie.genres.map(g => <li key={g}>{g}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default Movie;