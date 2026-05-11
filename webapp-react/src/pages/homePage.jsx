import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:3000/movies")
      .then((res) => {

        console.log(res.data);

        setMovies(res.data);

      });

  }, []);

  return (
    <>
      <div className="container py-5">

        <h1 className="text-center mb-5">
          Movies App
        </h1>

        <div className="row g-4">

          {movies.map((movie) => (

            <div
              key={movie.id}
              className="col-12 col-md-6 col-lg-4"
            >

              <div className="card h-100 shadow">

                <img
                  src={`http://localhost:3000/images/${movie.image}`}
                  alt={movie.title}
                  className="card-img-top"
                />

                <div className="card-body d-flex flex-column">

                  <h5 className="card-title">
                    {movie.title}
                  </h5>

                  <Link
                    to={`/movies/${movie.id}`}
                    className="btn btn-primary mt-auto"
                  >
                    Vai al dettaglio
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default HomePage;