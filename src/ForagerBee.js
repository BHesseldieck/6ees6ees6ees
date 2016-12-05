import Bee from './Bee.js';

class ForagerBee extends Bee {
  constructor () {
  	super();
  	this.age = 10;
  	this.job = 'find pollen';
  	this.canFly = true;
  	this.treasureChest = [];
  }
  forage (treausure) {
  	this.treasureChest.push(treausure);
  }
 };

export default ForagerBee;