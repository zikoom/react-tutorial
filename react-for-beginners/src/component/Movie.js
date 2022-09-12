function Movie({movie}) {
  return (
    <div>
      {
        <div>
          <h2>{movie.title}</h2>
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