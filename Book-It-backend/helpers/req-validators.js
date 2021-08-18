const User = require('../models/users');

const emailExists = async(email='')=>{
    const user = await User.findOne({email});
    if(user){
        throw new Error(`El correo ${email} ya se encuentra registrado`)
    }
}

const usserExists = async(usser='')=>{
    const user = await User.findOne({usser});
    if(user){
        throw new Error(`El usuario ${usser} ya se encuentra registrado`)
    }
}
module.exports={
    emailExists,
    usserExists
}