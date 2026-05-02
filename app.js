

const express = require("express");
const app = express();

const moviesRoutes = require("./routes/movieRoutes");
app.use("/movies", moviesRoutes);


const notFound = require("./middleware/notFound");
app.use(notFound);

const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);


require("./db/collegamento");

app.use(express.json());

app.listen(3000, () => {
  console.log("IL SERVER è ATTIVO");
});