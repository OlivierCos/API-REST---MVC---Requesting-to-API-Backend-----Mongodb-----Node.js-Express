// Création d'un schema mangoose pour que les données de la base MongoDB correspondent à celles précisées dans le schema Model des sauces
const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },  
  manufacturer: { type: String, required: true },  
  description: { type: String, required: true }, 
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, default: 0},
  dislikes: { type: Number, default: 0 },
  usersLiked : { type: Array, required: true, default: [] },
  usersDisliked : { type: Array, required: true, default: [] }
});

module.exports = mongoose.model('Sauce', sauceSchema); // On exporte ce shéma de données qu'on va pouvoir utiliser pour intéragir avec l'application