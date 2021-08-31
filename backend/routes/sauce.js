const express = require('express');
const router = express.Router();

const sauceCtrl = require('../controllers/sauce.js');

router.get('/', sauceCtrl.getAllSauce);
router.post('/', sauceCtrl.createSauce);
router.get('/:id', sauceCtrl.getOneSauce);
router.put('/:id', sauceCtrl.modifySauce);
router.delete('/:id', sauceCtrl.deleteSauce);
// router.post('/:id/like', sauceCtrl.XXXXX);

module.exports = router;
