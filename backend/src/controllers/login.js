const { User } = require('../DB_conection.js')

const login = async (req, res) => {

    /* Cada vez que nos envia login se recomienda hacerlo por Body nunca por Query */
    const { email, password } = req.query;

    try {
        if (!email || !password) res.status(400).json({ message: 'Faltan datos' });

        const user = await User.findOne({ where: { email } });

        if (!user) res.status(404).json({ message: 'Usuario no encontrado.'});

        user.password === password ? res.status(200).json({ access: true, id: user.id }) : res.status(403).json({ message: 'Password incorrecto' });

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { login };