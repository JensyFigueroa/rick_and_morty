const {Favorite} = require('../DB_conection.js');

const deleteFav = async (req, res) =>{
    const {id} = req.params;
    const {idUSer} = req.query;

    try {
        const fav = await Favorite.findOne({where:{id}})

        await fav.removeUser(idUser)

        res.status(200).json({success: true})
    } catch (error) {
        res.status(500).json({error: error.message})
    }

}

module.exports = {deleteFav};