const router = require ('express').Router ();


router.get ('/', function (req, res, next) {

	let contenidos = require('../src/services/contenidos');

	res.render (res.locals.__route.router.view, { item: contenidos.get(res.locals.__route.id) });
});

module.exports = router;