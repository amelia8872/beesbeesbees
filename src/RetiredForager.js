var RetiredForagerBee = function() {
  // Call the ForagerBee superclass
  ForagerBee.call(this);

  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';


};

// Set the prototype of RetiredForagerBee to an instance of ForagerBee
RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

// Set the constructor of RetiredForagerBee to RetiredForagerBee
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
};


