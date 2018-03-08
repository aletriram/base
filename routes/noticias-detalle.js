const router = require ('express').Router ();
const api = require ('../src/services/api');

router.get ('/', function (req, res, next) {
	
	api.get('/noticias/1').then((response) => {
		res.render (res.locals.__route.router.view, { noticia: response.data });
	}).catch( (e) => {
		console.log(e);
	});
});

module.exports = router;