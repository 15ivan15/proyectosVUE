mongoose = require('mongoose');

var esquemaUser = mongoose.Schema({

    name: {
        type: String,
        require: true
    },

    lastname: {
        type: String,
        require: true
    },

    usser: {
        type: String,
        require: true      
    },

    email: {
        type: String,
        require: true
    },

    password: {
        type: String,
        require: true
    },

    books: [{

    }]

});

var User = module.exports = mongoose.model('user', esquemaUser);

module.exports.get = function (callback, limit){

    User.find(callback).limit(limit);

}