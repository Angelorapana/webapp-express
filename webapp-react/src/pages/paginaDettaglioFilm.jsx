import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"


function PaginaDettaglioFilm() {  

const params = useParams()
const [movie, setMovie] = useState(null)

useEffect(() => {

  axios.get(`http://localhost:3000/movies/${params.id}`)
    .then((res) => {

      console.log(res.data)
      setMovie(res.data)

    })

}, [])
  console.log(params)

  return (
    <>
      <h1>Pagina Dettaglio Film</h1>
    {movie && (
  <h2>{movie.title}</h2>
)}
    
    
    </>
  )
}

export default PaginaDettaglioFilm