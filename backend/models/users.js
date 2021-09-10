const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); // package pour empêcher de créer deux comptes avec la même adresse email

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator); // Utilisation du package via la méthode plugin

module.exports = mongoose.model('User', userSchema);