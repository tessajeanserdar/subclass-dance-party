var makePuffer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this,top, left, timeBetweenSteps);
  console.log(this.$node);
  this.$node.addClass('puffer');
  this.right = true;

}
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

makePuffer.prototype = Object.create(makeDancer.prototype);
makePuffer.prototype.constructor = makePuffer;

// var oldStep = makeDancer.prototype.step;

makePuffer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();

  if(this.right){
    var styleSet = {
      left : "+=50"
    }
    this.$node.removeClass('flip');
  } else {
    var styleSet = {
      left : "-=50"
    }
    this.$node.addClass('flip');
  }
  
  if(this.$node.offset().left >= $(window).width() - 100){
    this.right = false;
  } else if ( this.$node.offset().left <= 0

    ){
    this.right = true;
  }

  this.$node.animate(styleSet);
};


