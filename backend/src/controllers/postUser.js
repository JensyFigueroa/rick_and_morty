const {User} = require('../DB_conection.js')

const postUser = async (req, res) =>{
    const {nameUser, email, password} = req.body;

    console.log(req.body)

    try {
        if(!nameUser || !email || !password) res.status(400).json({message: 'Fill in the fields'});

        const [user, created] = await User.findOrCreate({where:{nameUser, email, password}});
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {postUser};