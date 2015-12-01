var makePatrick = function(top, left, timeBetweenSteps) {
  makeDancer.call(this,top, left, timeBetweenSteps);
  this.$node.addClass('patrick');
  
    var mouse_tracker = function(event){
      $(this).css({"top":event.clientY, "left":event.pageX});
    }
    $(this).on('mousedown', function(){
      console.log("patrick");
      $('body').on('mousemove', mouse_tracker);
    });
    
    $('body').on('mouseup', function(){
      $('body').off('mousemove');
    });

    var node = $(this);
    var position = node.offset();
    var initialPosition = {
      x : position.left - event.pageX,
      y : position.top -event.pageY
    };

    var handles = {
      mouseMove : function(event){
        node.css({
          left:(initialPosition.x + event.pageX) + 'px',
          top:(initialPosition.y + event.pageY) + 'px'
        });
      },

      mouseUp : function(event){
        $(this).off(handles);
      }
    };
    
    $(document).on(handles);
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

