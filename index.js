// Importe le module express
const express = require("express");

// Importe le module router depuis un fichier externe
const router = require("./router");

// Définit le port d'écoute du serveur
const PORT = 8000;

// Crée une instance de l'application express
const app = express();

// Importe le module cors pour autoriser les requêtes cross-origin
const cors = require("cors");

// Importe le module dotenv pour charger les variables d'environnement depuis un fichier .env
const dotenv = require("dotenv");
dotenv.config();

// Importe le module mongoose pour se connecter à une base de données MongoDB
const mongoose = require("mongoose");

// Se connecte à la base de données MongoDB en utilisant l'URL spécifiée dans les variables d'environnement
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

// Utilise le module cors pour autoriser les requêtes cross-origin
app.use(cors());

// Utilise le module express.json() pour parser les requêtes avec un corps au format JSON
app.use(express.json());

// Utilise le module express.urlencoded() pour parser les requêtes avec un corps au format x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Utilise le module router pour gérer les requêtes sur les différentes routes
app.use(router);

// Lance l'écoute du serveur sur le port spécifié
app.listen(PORT, async () => {
    console.log(`server up on port ${PORT}`);
});


/*
Ce code crée un serveur Node.js avec Express, qui utilise le module mongoose pour se connecter à une base de données MongoDB. Les requêtes cross-origin sont autorisées grâce au module cors. Les requêtes sur les différentes routes sont gérées par le module router, et le serveur écoute sur le port 8000.
*/