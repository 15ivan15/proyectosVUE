const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/users')

/* const usuariosGet = async (req = request, res = response) => {
    const { usser, password } = req.body;
    const user = await User.findOne({ usser })

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
        return res.status(400).json({
            msg: 'Usuario / Contraseña incorrecto'
        })
    }
    res.json({
        message: 'Usuario encontrado correctamente!',
        data: user
    });

} */
const usuariosGet = async (req = request, res = response) => {
    const { usser } = req.params;
    const user = await User.findOne({ usser })

    /* const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
        return res.status(400).json({
            msg: 'Usuario / Contraseña incorrecto'
        })
    } */
    res.json({
        message: 'Usuario encontrado correctamente!',
        data: user
    });

}

const usuariosPost = (req, res = response) => {

    const { name, lastname, usser, email, password } = req.body;
    const user = new User({ name, lastname, usser, email, password });

    //cifrado de la contraseña
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    user.save();
    res.json({
        message: 'Usuario creado correctamente!',
        data: user
    });
}

const usuariosPut = async (req, res = response) => {

    const { usser } = req.params;
    const { password, email, ...data } = req.body;

    if (password) {
        const salt = bcrypt.genSaltSync();
        data.password = bcrypt.hashSync(password, salt);
    }

    const user = await User.findOneAndUpdate({ usser }, data)

    res.json({
        message: 'Usuario actualizado correctamente!',
        data: user
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = async (req, res = response) => {
    const { usser } = req.params;
    console.log(req.params)
    const user = await User.findOneAndUpdate({ usser }, { state: false });

    res.json({
        message: 'Usuario eliminado correctamente!',
        data: user
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}