const router = require ('express').Router ();

router.get ('/', function (req, res, next) {

	res.render (res.locals.__route.router.view);
});

module.exports = router;