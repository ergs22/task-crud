import express from "express";
import indexRoutes from "./routes/index.routes";
import { create } from "express-handlebars";
import path from "path";
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));

const exphbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
  extname: ".hbs",
});

app.engine(".hbs", exphbs.engine);

app.set("view engine", ".hbs");

//middlewares
app.use(morgan("dev")); // muestra las peticiones de los servidores
app.use(express.urlencoded({ extended: false })); // combierte en objeto json lo que envian de una peticion post

//routes
app.use(indexRoutes);

//static files
app.use(express.static(path.join(__dirname, "public")));

export default app;
