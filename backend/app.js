const express = require('express');  // Framework basé sur Node (Express représente l'infrastructure de serveur d'applications Web)
const mongoose = require('mongoose'); // Utilisation de la base de données Mongo Db
const path = require('path'); // Pour retrouver les répertoires et chemins des fichiers images
const helmet = require('helmet'); // utilisation du module 'helmet' pour la sécurité en protégeant l'application de certaines vulnérabilités
const sauceRoutes = require('./routes/sauce.js');
const userRoutes = require('./routes/users.js');

// utilisation du module 'dotenv' pour masquer les informations de connexion à la base de données à l'aide de variables d'environnement
require('dotenv').config();

const app = express(); //  L'application utilise le framework expres


//implémentation des schémas de données strictes pour rendre notre application plus robuste
mongoose.connect(process.env.MONGO,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log(error));

// Header pour contourner les erreurs en débloquant certains systèmes de sécurité CORS, afin que tout utilisateur puisse faire des requétes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');// Les ressources peuvent être partagées à tous
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // Entêtes utilisées après la pré-vérification cross-origin afin de donner l'autorisation
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Méthodes autorisées pour les requêtes HTTP
    next();
  });

//Remplace body-parser, qui est désormais integré à express, cela permet d'extraire l'objet JSON des requêtes POST
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(helmet());

app.use('/images', express.static(path.join(__dirname, 'images'))); // Gestion de l'image de façon statique, pour que le client télécharge les images du server
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

// Export de l'application express pour déclaration dans server.js
module.exports = app;
