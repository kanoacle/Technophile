/* jshint esversion: 6*/

const Watch = require('./Watch.js');
const Tablet = require('./Tablet.js');

function SmartWatch() {
  Watch.call(this);
}

extend = function (destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
};

extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;