var Promise = require('promise');

const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCj3ONLUEAPHQqJa7cDYMAfQ9YR3eojG1o',
  Promise: Promise
});

var bangsueLocation = {
  lat: 13.7495514,
  lng: 100.5177439
};
var restaurantsService = {};

restaurantsService.search = function() {
  return googleMapsClient.placesNearby({
    location: bangsueLocation,
    type: 'restaurant',
    rankby: 'distance',
    language: 'th',
  }).asPromise();
};

module.exports = restaurantsService;
