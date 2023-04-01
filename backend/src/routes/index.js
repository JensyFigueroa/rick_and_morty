const {Router} = require('express');

const {getCharById} = require('../controllers/getCharById.js');
const {getCharDetails} = require('../controllers/getCharDetails.js');
// const {addFav, getFavs, deleteFav} = require('../controllers/favController.js')
const {postFav} = require('../controllers/postFav.js')
const {getFavs} = require('../controllers/getFavs.js')
const {deleteFav} = require('../controllers/deleteFav.js')
const {postUser} = require('../controllers/postUser.js')
const {login} = require('../controllers/login.js')


const router = Router();

router.get('/rickandmorty/onsearch/:id', getCharById);
router.get('/rickandmorty/detail/:id', getCharDetails);

router.post('/rickandmorty/favorites', postFav);
router.get('/rickandmorty/favorites', getFavs);
router.delete('/rickandmorty/favorites/:id', deleteFav)


router.get('/rickandmorty/login', login);
router.post('/rickandmorty/login', postUser);

// router.get('/rickandmorty', getApiData)

module.exports = router;