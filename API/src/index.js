import "dotenv/config.js";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import morganBody from "morgan-body";


// Imports de componentes del API
//import models from './models';
import routes from './routes/indexRoutes.js';


// Instanciación de la aplicación de Express
const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'))
morganBody(app);

// Configuración de las rutas.
app.use('/users', routes.user);


app.get('/', (req, res) => {
    res.send("Hola");
});

// Inicialización del servidor
app.listen(process.env.PORT, () =>
  console.log(
    `¡Aplicación de ejemplo escuchando en el puerto ${process.env.PORT}!`
  )
);