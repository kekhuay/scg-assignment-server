var Promise = require('promise');

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_API_KEY,
  Promise: Promise
});

var bangsueLocation = {
  lat: 13.7495514,
  lng: 100.5177439
};
var restaurantsService = {};

restaurantsService.search = function(keyword) {
  return googleMapsClient.placesNearby({
    location: bangsueLocation,
    type: 'restaurant',
    rankby: 'distance',
    language: 'th',
    keyword: keyword
  }).asPromise();
};

restaurantsService.nextPage = function(pageToken) {
  return googleMapsClient.placesNearby({
    pagetoken: pageToken,
  }).asPromise();
};

module.exports = restaurantsService;
