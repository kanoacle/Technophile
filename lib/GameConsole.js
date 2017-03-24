/*jshint esversion: 6 */

function GameConsole(systemName) {
    this.systemName = systemName;
}

GameConsole.prototype.play = function(game) {
      return this.systemName + ' plays ' + game.title;
};

module.exports = GameConsole;