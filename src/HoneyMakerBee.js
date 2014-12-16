//call the Bee superclass
//set the prototype
//set the constructor
//an age property that is set to 10
//a job property that is set to make honey
//a color property inhereted from bee that is set to yellow
//a food property that is inhereted from grub
//an eat method that is inhereted from grub
//a honeyPot property that is set to 0
//a makeHoney method that adds 1 to that honeyBee\'s honeyPot
//a giveHoney method that subtracts 1 from that honeyBee\'s honeyPot
var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = "make honey";
  this.color = "yellow";
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Grub.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function(){
  this.honeyPot += 1;
};

HoneyMakerBee.prototype.giveHoney = function(){
  this.honeyPot -= 1;
};

