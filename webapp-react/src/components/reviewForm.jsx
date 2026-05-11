import { useState } from "react";
import axios from "axios";

export default function ReviewForm({ movieId, fetchMovie }) {

  const [formData, setFormData] = useState({
    name: "",
    vote: "",
    text: ""
  });

  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    axios
      .post(
        `http://localhost:3000/movies/${movieId}/reviews`,
        formData
      )
      .then((res) => {

        console.log(res.data);

        setFormData({
          name: "",
          vote: "",
          text: ""
        });

        fetchMovie();

      })
      .catch((err) => {
        console.log(err);
      });

  }

  return (
    <>
      <h2>AGGIUNGI RECENSIONE</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="vote"
          placeholder="Voto"
          value={formData.vote}
          onChange={handleChange}
        />

        <textarea
          name="text"
          placeholder="Recensione"
          value={formData.text}
          onChange={handleChange}
        ></textarea>

        <button>
          Invia
        </button>

      </form>
    </>
  );
}