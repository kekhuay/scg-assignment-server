var express = require('express');
var router = express.Router();
var apicache = require('apicache');
var restaurantsService = require('../services/restaurantsService');
 
var cache = apicache.middleware;

router.get('/search', cache('5 minutes'), function(req, res, next) {
  restaurantsService.search(req.query.keyword).then(function(response) {
    res.send(response);
  });
});

router.get('/search/next-page', cache('5 minutes'), function(req, res, next) {
  restaurantsService.nextPage(req.query.pageToken).then(function(response) {
    res.send(response);
  });
});

module.exports = router;
