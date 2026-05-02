

const express = require("express");
const app = express();
const moviesRoutes = require("./routes/movieRoutes");
const notFound = require("./middleware/notFound");

app.use(notFound);

app.use("/movies", moviesRoutes);

require("./db/collegamento");

app.use(express.json());

app.listen(3000, () => {
  console.log("IL SERVER è ATTIVO");
});