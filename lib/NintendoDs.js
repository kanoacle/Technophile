/*jshint esversion: 6 */

const GameConsole = require('./GameConsole.js');
const WebBrowser = require('./WebBrowser.js');

function NintendoDS() {
  GameConsole.call(this, 'Nintendo DS');
}

extend = function (destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
};

extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;