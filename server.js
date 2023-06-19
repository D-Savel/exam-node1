import dotenv from "dotenv";
import express from "express";
import book_routes from "./routes/books_routes.js";
import home_route from "./routes/home_route.js";
import cors from "cors";

dotenv.config();
const { APP_HOSTNAME, APP_PORT } = process.env;

const app = express();

const corsOptions = {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
  exposedHeaders: ['x-auth-token'],
};

// ==========
// App middlewares
// ==========

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use((req, res, next) => {
// res.status(404).send({ error: "Erreur 400! La page que vous demandez n'existe pas" })
// });
// app.use((req, res, next) => {
//  res.status(500).send({ error: "Oups! Erreur 500! Une erreur s'est produite" })
// });



// ==========
// App routers
// ==========

app.use("/api", book_routes);
app.use("/", home_route);



// ==========
// App start
// ==========

app.listen(APP_PORT, () => {
  console.log(`App listening at http://${APP_HOSTNAME}:${APP_PORT}`);
});