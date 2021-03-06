var makeSlideDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this,top, left, timeBetweenSteps);
  this.$node.addClass('fish');
  this.timeBetweenSteps = this.timeBetweenSteps < 50  ? 50 : this.timeBetweenSteps ;
  this.top = top;
  this.left = left;
  this.width = 100
  this.height = 60
  this.bottom = this.top + this.height;
  this.right = this.left + this.width;
  this.pair = false;
  this.lineup = false;
};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

makeSlideDancer.prototype = Object.create(makeDancer.prototype);
makeSlideDancer.prototype.constructor = makeSlideDancer;

// var oldStep = makeDancer.prototype.step;

makeSlideDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();

  var width =  $('body').width();
  var height = $('body').height();

  this.left +=10
  this.top -=10
  
  this.setPosition(this.top,this.left);   
  

  if (this.top <= 0) {
    this.top = height;
  }
  if (this.left >= width) {
    this.left = 0;
  }
};





