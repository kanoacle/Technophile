/*jshint esversion: 6 */

function Watch() {
    this.bodyPart = null;
}

Watch.prototype.wear = function(bodyPart) {
      this.bodyPart = bodyPart;
};

module.exports = Watch;