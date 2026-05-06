import axios from "axios"
import { useEffect, useState  } from "react"
import { Link } from "react-router-dom"

function HomePage() {
    const [movies, setMovies] = useState([])

    useEffect(() => {

  axios.get("http://localhost:3000/movies")
  .then((res) => {
    console.log(res.data)
    setMovies(res.data)
  })

}, [])

  return (
    <>
      <h1>HomePage</h1>
      <ul>

  {movies.map((movie) => (

    <li key={movie.id}>

  <Link to={`/movies/${movie.id}`}>
    {movie.title}
  </Link>

</li>

  ))}

</ul>
    </>
  )
}

export default HomePage