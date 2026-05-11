import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import ReviewForm from "../components/ReviewForm";

function PaginaDettaglioFilm() {

  const params = useParams();

  const [movie, setMovie] = useState(null);

  function fetchMovie() {

    axios
      .get(`http://localhost:3000/movies/${params.id}`)
      .then((res) => {

        console.log(res.data);

        setMovie(res.data);

      });

  }

  useEffect(() => {

    fetchMovie();

  }, []);

  return (
    <>
      <h1>Pagina Dettaglio Film</h1>

      {movie && (
        <>
          <h2>{movie.title}</h2>

          <h3>RECENSIONI</h3>

          {movie.reviews.map((review) => (

            <div key={review.id}>

              <h4>{review.name}</h4>

              <p>Voto: {review.vote}</p>

              <p>{review.text}</p>

            </div>

          ))}

          <ReviewForm
            movieId={movie.id}
            fetchMovie={fetchMovie}
          />
        </>
      )}
    </>
  );
}

export default PaginaDettaglioFilm;