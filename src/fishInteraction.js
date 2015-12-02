$(document).ready(function() {


	$('.fishInteractButton').on('click', function(event){
		var allFish = [];
		for (var i=0; i<window.dancers.length; i++) {
			if (window.dancers[i].$node[0].className.split(' ').indexOf('fish') > -1) {
				allFish.push(window.dancers[i]);
			}
		}
		console.log("fishArray ",allFish);
        var fish1, fish2;
        var closestDistance;

        allFish.forEach(function (fish) {
        	if(!fish.pair){
	        	allFish.forEach(function (otherFish) {
	        		var leftDiff = fish.left - otherFish.left; 
	        		var topDiff = fish.top - otherFish.top;
	        		var distance = Math.sqrt( (leftDiff * leftDiff) + (topDiff * topDiff) );
	        		if (!closestDistance || distance < closestDistance && fish !== otherFish && !otherFish.pair) {
	        			closestDistance = distance;
	        			fish1 = fish;
	        			fish2 = otherFish;
	        			fish1.pair = true;
	        			fish2.pair = true;
	        		}
	        	});        		
        	}
        });
        if (fish1 && fish2){
	        fish2.$node.animate({
	        	left: fish1.left,
	        	top: fish1.top
	        }, 700, function(){
	        	fish2.left = fish2.$node.position().left;
	        	fish2.top = fish2.$node.position().top;
	        });
	        fish2.timeBetweenSteps = fish1.timeBetweenSteps;
        }
	});

});