var express = require('express');
var router = express.Router();
var restaurantsService = require('../services/restaurantsService');

router.get('/search', function(req, res, next) {
  restaurantsService.search().then(function(response) {
    res.send(response);
  });
});

module.exports = router;