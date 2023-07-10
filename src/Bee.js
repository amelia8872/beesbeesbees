var Bee = function() {
  // Call the Grub superclass constructor
  Grub.call(this);

  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// Set the prototype of Bee to an instance of Grub
Bee.prototype = Object.create(Grub.prototype);

// Set the constructor property of Bee to Bee
Bee.prototype.constructor = Bee;


