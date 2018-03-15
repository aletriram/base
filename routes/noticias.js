const router = require ('express').Router ();


router.get ('/:id', function (req, res, next) {

	res.render (res.locals.__route.router.view);
});


router.get ('/', function (req, res, next) {

	res.render (res.locals.__route.router.view);
});

module.exports = router;