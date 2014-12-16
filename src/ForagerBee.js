//call the Bee superclass
//set the prototype
//set the constructor
//an age property that is set to 10
//a job property that is set to find pollen
//a color property inhereted from bee that is set to yellow
//a food property that is inhereted from grub
//an eat method that is inhereted from grub
//a canFly property that is set true
//a treasureChest property that is set to an empty array []
//a forrage method that allows the bee to add a treasure to the treasureChest
var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = "find pollen";
  this.color = "yellow";
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasue){
  this.treasureChest.push(treasue);
};

