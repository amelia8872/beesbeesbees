var HoneyMakerBee = function() {
  // Call the bee superclass
  Bee.call(this);

  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;

};

// Set the prototype of HoneyMakerBee to an instance of Bee
HoneyMakerBee.prototype = Object.create(Bee.prototype);

// Set the constructor of HoneyMakerBee to HoneyMakerBee
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot += 1;
};

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot -= 1;
};
