var express = require('express');
var router = express.Router();
var linearService = require('../services/linear-equation');

router.post('', function(req, res, next) {
   try {
     var nextThreeSequence = linearService.findNextThreeSequence(req.body.seq);
     res.send({nextThreeSequence, msg: ''});
   } catch {
     res.send({nextThreeSequence: [], msg: 'could not find solution for this sequence.'});
   }
});

module.exports = router;
