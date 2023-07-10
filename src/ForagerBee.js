var ForagerBee = function() {
  // Call the Bee superclass
  Bee.call(this);

  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];

};

// Set the prototype of ForagerBee to an instance of Bee
ForagerBee.prototype = Object.create(Bee.prototype);

// Set the constructor of ForagerBee to ForagerBee
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function (treasure) {
  this.treasureChest.push(treasure);
};

