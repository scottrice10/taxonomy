//call the ForagerBee superclass
//set the prototype
//set the constructor
//an age property that is set to 40
//a job property that is set to gamble
//a canFly property that is set to false
//a color property that is set to grey
//a forrage method that returns "I am too old, let me play cards instead"
//a food property that is inhereted from grub
//an eat method that is inhereted from grub
//a treasureChest property inhereted from ForagerBee that is set to an empty array []
//an always winning gamble method that allows the bee to add a treasure to the treasureChest
var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = "gamble";
  this.canFly = false;
  this.color = "grey";
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function(){
  //ForagerBee.prototype.forage.call(this);
  return("I am too old, let me play cards instead");
};

ForagerBee.prototype.gamble = function(treasue){
  this.treasureChest.push(treasue);
};

