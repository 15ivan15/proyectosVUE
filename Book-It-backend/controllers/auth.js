const bcrypt = require('bcryptjs');
const User = require('../models/users')
const { generatorJWT } = require('../helpers/generator-jwt')

const login = async (req, res) => {
    const { usser, password } = req.body;
    try {
        const user = await User.findOne({ usser, state: true });
        if (!user) {
            return res.json({
                message: 'Usuario / Contraseña incorrecto'
            })
        }

        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.json({
                message: 'Usuario / Contraseña incorrecto'
            })
        }
        const token = await generatorJWT(user._id);
        console.log(token)

        res.json({
            message: `su token es ${token}`,
            data: user
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Error interno'
        })
    }
}

module.exports = {
    login
}