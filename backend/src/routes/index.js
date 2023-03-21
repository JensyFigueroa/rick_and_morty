const {Router} = require('express');

const {getCharById} = require('../controllers/getCharById.js');
const {getCharDetails} = require('../controllers/getCharDetails.js');
const {addFav, getFavs, deleteFav} = require('../controllers/favController.js')

const router = Router();

router.get('/rickandmorty/onsearch/:id', getCharById);
router.get('/rickandmorty/detail/:id', getCharDetails);

router.post('/rickandmorty/favorites', addFav);
router.get('/rickandmorty/favorites', getFavs);
router.delete('/rickandmorty/favorites/:id', deleteFav)

module.exports = router;