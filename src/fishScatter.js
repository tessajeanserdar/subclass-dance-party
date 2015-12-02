var scatterFish;
$(document).ready(function() {

	scatterFish = function(){
		var allFish = [];
		for (var i=0; i<window.dancers.length; i++) {
			if (window.dancers[i].$node[0].className.split(' ').indexOf('fish') > -1) {
				allFish.push(window.dancers[i]);
			}
		}
        for(var i = 0 ; i <allFish.length ; i++) {

            allFish[i].left = ($("body").width() - 150) * Math.random()
        	allFish[i].top = ($("body").height() - 180) * Math.random()
        	allFish[i].timeBetweenSteps = Math.random() * 1000;
        	allFish[i].$node.animate({
	        	left: allFish[i].left,
	        	top: allFish[i].top
	        }, 700);
        }
	};


	$('.fishScatterButton').on('click', function(event){
		scatterFish();
    });



 });
      