// Fonctions qui vont s'appliquer aux différentes routes pour les sauces

const express = require('express');
const router = express.Router(); // Appel du routeur avec la méthode mise à disposition par Express
const auth = require('../middleware/auth.js'); // Middleware pour sécuriser les routes via le plugin JsonWebToken
const multer = require('../middleware/multer-config.js'); // Middleware pour la gestion des images


const sauceCtrl = require('../controllers/sauce.js'); // On associe les fonctions aux différentes routes en important le controller

router.get('/', auth, sauceCtrl.getAllSauce);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce);

module.exports = router;
