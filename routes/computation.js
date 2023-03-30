var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    let x = (Math.random());
    if (req.query.x != undefined) {
        x = req.query.x;
    }

    res.render('computation', { x:x, acosh:Math.acosh(x), log1p:Math.log1p(x), tan:Math.tan(x), sqrt:Math.sqrt(x)  });
});

module.exports = router;