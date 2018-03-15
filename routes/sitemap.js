const router = require ('express').Router ();

router.get ('/', function (req, res, next) {

	res.send ("sitema.xml");
});

module.exports = router;