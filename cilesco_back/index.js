const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const urlRoutes = require("../cilesco-api/src/route/url");

// Initial

const app = express();
require("../cilesco_back/src/db")
app.use(cors())
app.set("port", process.env.PORT || 3001)
app.use(express.json())

// Middlewares

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/url", urlRoutes);

app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
