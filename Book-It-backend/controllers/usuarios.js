const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/users')

const usuariosGet = (req = request, res = response) => {
    
    res.json({ msg: 'get API - controlador', });
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
    const {password, email, ...data } = req.body;

    if (password) {
        const salt = bcrypt.genSaltSync();
        data.password = bcrypt.hashSync(password, salt);
    }

    const user = await User.findOneAndUpdate(usser, data)
    console.log(user._id)

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

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}