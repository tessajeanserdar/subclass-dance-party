var makeShark = function(top, left, timeBetweenSteps) {
  makeDancer.call(this,top, left, timeBetweenSteps);
  this.$node.addClass('shark');
  

}
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

makeShark.prototype = Object.create(makeDancer.prototype);
makeShark.prototype.constructor = makeShark;

// var oldStep = makeDancer.prototype.step;

makeShark.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};





$(document).keydown(function(e){
    $('.shark').removeClass('rotateRight');
    $('.shark').removeClass('rotateLeft');
    $('.shark').removeClass('upsideDown');

    if (e.keyCode == 37) { 
       $('.shark').addClass('rotateLeft');
       $('.shark').css("left","-=5");
       return false;
    }
    if (e.keyCode == 38) { 
       $('.shark').css("top","-=5");
       return false;
    }
    if (e.keyCode == 39) { 
       $('.shark').addClass('rotateRight');
       $('.shark').css("left","+=5");
       return false;
    }
    if (e.keyCode == 40) { 
       $('.shark').addClass('upsideDown');
       $('.shark').css("top","+=5");
       return false;
    }
});
