import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import Movie from '../component/Movie'

function Detatil(){

  /**
   * 뒤에 id 값 붙여주면 URL 완성
   */
  const movieRequestURL = 'https://yts.mx/api/v2/movie_details.json?movie_id='
  //movieID
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  const [loaded, setLoaded] = useState(false);

  const getMovieDetail = async () => {
    setMovie((await (await fetch(movieRequestURL + id)).json()).data.movie)
    setLoaded(true)
  }

  useEffect(() => {
    getMovieDetail();
  }, [])

  console.log('movie: ', movie);

  return loaded ? <Movie movie={movie} /> : <h1> Loading...</h1>;
}

export default Detatil;