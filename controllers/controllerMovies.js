const collegamento = require("../db/collegamento");

const index = (req, res) => {
  const sql = "SELECT * FROM movies";

  collegamento.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: "Errore database"
      });
    }

    res.json(results);
  });
};

//CRUD SHOW 
const show = (req, res) => {
  const id = req.params.id;

  const movieSql = "SELECT * FROM movies WHERE id = ?";
  const reviewsSql = "SELECT * FROM reviews WHERE movie_id = ?";

  collegamento.query(movieSql, [id], (err, movieResults) => {
    if (err) {
      return res.status(500).json({ error: "Errore database" });
    }

    if (movieResults.length === 0) {
      return res.status(404).json({ error: "Film non trovato" });
    }

    const movie = movieResults[0];

    collegamento.query(reviewsSql, [id], (err, reviewResults) => {
      if (err) {
        return res.status(500).json({ error: "Errore database" });
      }

      movie.reviews = reviewResults;

      res.json(movie);
    });
  });
};


const storeReview = (req, res) => {

  const id = req.params.id;

  const { name, vote, text } = req.body;

  const sql = `
    INSERT INTO reviews
    (name, vote, text, movie_id)
    VALUES (?, ?, ?, ?)
  `;

  collegamento.query(
    sql,
    [name, vote, text, id],
    (err, result) => {

      if (err) {
        return res.status(500).json({
          error: "Errore database"
        });
      }

      res.status(201).json({
        message: "Recensione aggiunta"
      });

    }
  );

};

module.exports = {
  index,
  show,
  storeReview
};