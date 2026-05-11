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

        setMovie(res.data);

      })
      .catch((err) => {
        console.log(err);
      });

  }

  useEffect(() => {

    fetchMovie();

  }, []);

  return (
    <>
      <div className="container py-5">

        {movie && (
          <>

            <div className="card shadow p-4 mb-5">

              <h1 className="mb-3">
                {movie.title}
              </h1>

              <p>
                Lorem ipsum descrizione film
              </p>

            </div>

            <div className="mb-5">

              <h2 className="mb-4">
                Recensioni
              </h2>

              {movie.reviews.map((review) => (

                <div
                  key={review.id}
                  className="card p-3 mb-3 shadow-sm"
                >

                  <h5>{review.name}</h5>

                  <p>
                    <strong>Voto:</strong> {review.vote}
                  </p>

                  <p>{review.text}</p>

                </div>

              ))}

            </div>

            <div className="card shadow p-4">

              <ReviewForm
                movieId={movie.id}
                fetchMovie={fetchMovie}
              />

            </div>

          </>
        )}

      </div>
    </>
  );
}

export default PaginaDettaglioFilm;