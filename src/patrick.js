var makePatrick = function(top, left, timeBetweenSteps) {

  makeDancer.call(this,top, left, timeBetweenSteps);
  this.$node.addClass('patrick');
  this.left = left;
  this.top = top;


  $('body').on('mousedown', '.patrick', function(event){
    var scatterOnce = _.once(scatterFish);
    $('.patrick').draggable(
       {
        drag: function(){
            var offset = $(this).offset();
            var xPos = offset.left;
            var yPos = offset.top;

            var xFish = fishMaster.$node.position().left;
            var yFish = fishMaster.$node.position().top;

            if (Math.abs(xPos - xFish) < 100 && Math.abs(yPos - yFish)){
              scatterOnce();
            }
         }
      }
    );
    


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


