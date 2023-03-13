const {Router} = require('express');

const {getCharById} = require('../controllers/getCharById.js');
const {getCharDetails} = require('../controllers/getCharDetails.js');
const {addFav, getFavs, deleteFav} = require('../controllers/favController.js')

const router = Router();

router.get('/rickandmorty/onSearch/:id', getCharById);
router.get('/rickandmorty/detail/:id', getCharDetails);

router.post('/fav', addFav);
router.get('/fav', getFavs);
router.delete('fav/:id', deleteFav)

module.exports = router;