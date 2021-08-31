const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.js');

const sauceCtrl = require('../controllers/sauce.js');

router.get('/', auth, sauceCtrl.getAllSauce);
router.post('/', auth, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
// router.post('/:id/like', sauceCtrl.XXXXX);

module.exports = router;
