let rutas = require('express').Router();
rutas.get('/',function(req,res){
	res.json({
		status: 'api funcionando',
		message: 'bienvenido al tutorial'
	});
});

var controladorLibro = require('../controllers/libro');
var controladorNota = require('../controllers/nota');
var controladorUser = require('../controllers/user');

rutas.route('/libro')
    .get(controladorLibro.index)
    .post(controladorLibro.new);

rutas.route('/nota')
    .get(controladorNota.index)
    .post(controladorNota.new);

rutas.route('/user')
    .get(controladorUser.index)
    .post(controladorUser.new);

rutas.route('/libro/:libro_id')
    .get(controladorLibro.view)
    .patch(controladorLibro.update)
    .put(controladorLibro.update)
    .delete(controladorLibro.delete);// Export API routes

rutas.route('/nota/:nota_id')
    .get(controladorNota.view)
    .patch(controladorNota.update)
    .put(controladorNota.update)
    .delete(controladorNota.delete);// Export API routes

rutas.route('/user/:user_id')
    .get(controladorUser.view)
    .patch(controladorUser.update)
    .put(controladorUser.update)
    .delete(controladorUser.delete);// Export API routes

module.exports = rutas;