
const cors = require("cors")
const express = require("express");
const app = express();

app.use(express.static("public"));

require("./db/collegamento");

app.use(express.json());
app.use(cors())

const moviesRoutes = require("./routes/movieRoutes");
app.use("/movies", moviesRoutes);


const notFound = require("./middlewares/notFound");
app.use(notFound);

const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);




app.listen(3000, () => {
  console.log("IL SERVER è ATTIVO");
});