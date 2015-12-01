var makePatrick = function(top, left, timeBetweenSteps) {
  makeDancer.call(this,top, left, timeBetweenSteps);
  this.$node.addClass('patrick');

  $('body').on('click', '.patrick', function(event){
   $('.patrick').draggable();
 });
  
}
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

makePatrick.prototype = Object.create(makeDancer.prototype);
makePatrick.prototype.constructor = makePatrick;

// var oldStep = makeDancer.prototype.step;

makePatrick.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step

    makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$node.toggle();
  };

