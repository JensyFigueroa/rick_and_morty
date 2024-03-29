const {Favorite, User} = require('../DB_conection');

const getFavs = async (req, res) => {
    const {idUser} = req.query;
    
    try {
        const favs = await Favorite.findAll({include: [{model: User, where:{id:idUser}}]});
        res.status(200).json(favs)
    } catch (error) {
        res.status(200).json({error: error.message})
    }

}

module.exports = {getFavs}