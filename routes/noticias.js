const router = require ('express').Router ();
const api = require ('../src/services/api');

router.get ('/:id(\\d+)', function (req, res, next) {
	
	api.get('/noticias/' + req.params.id).then((response) => {
		res.render ('noticias-detalle', { noticia: response.data });
	}).catch( (e) => {
		console.log(e);
		next();
	});
});

router.get ('/', function (req, res, next) {

	api.get('/noticias').then((response) => {
		res.render (res.locals.__route.router.view, { noticias: response.data });
	}).catch( (e) => {
		console.log(e);
		next();
	});
});

module.exports = router;