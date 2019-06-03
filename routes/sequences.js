var express = require('express');
var router = express.Router();
var linearService = require('../services/linear-equation');

router.post('', function(req, res, next) {
   var nextThreeSequence = linearService.findNextThreeSequence(req.body.seq);
   res.send(nextThreeSequence);
});

module.exports = router;
