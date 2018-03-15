const router = require ('express').Router ();
const api = require ('../src/services/api');

router.get ('/', function (req, res, next) {
	
	api.get('/proyectos').then((response) => {
		res.render (res.locals.__route.router.view, { proyectos: [response.data] });
	}).catch( (e) => {
		console.log(e);
	});

});

module.exports = router;