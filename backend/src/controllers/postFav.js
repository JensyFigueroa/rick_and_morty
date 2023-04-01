const {Favorite} = require('../DB_conection.js')

const postFav = async (req, res) =>{
    const {name, origin, status, image, species, gender} = req.body;

    try {
        if(!name || !origin || !status || !image || !species || !gender) res.status(400).json({message: 'Faltan datos'});

        const [fav, created] = await Favorite.findOrCreate({where:{name, origin, status, image, species, gender}});
        res.status(200).json(fav)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {postFav};