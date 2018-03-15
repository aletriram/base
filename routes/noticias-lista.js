const router = require ('express').Router ();
const api = require ('../src/services/api');

router.get ('/', function (req, res, next) {

	api.get('/noticias').then((response) => {
		res.render (res.locals.__route.router.view, { noticias: response.data });
	}).catch( (e) => {
		console.log(e);
	});
});

module.exports = router;