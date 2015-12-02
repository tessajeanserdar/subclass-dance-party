var fishMaster;
$(document).ready(function() {


	$('.fishSchoolButton').on('click', function(event){
		var allFish = [];
		for (var i=0; i<window.dancers.length; i++) {
			if (window.dancers[i].$node[0].className.split(' ').indexOf('fish') > -1) {
				allFish.push(window.dancers[i]);
			}
		}
        fishMaster = allFish[0];

        for(var i = 1 ; i <allFish.length ; i++) {

        	allFish[i].left = fishMaster.left + (200 * Math.random() - 200 * Math.random());
        	allFish[i].top = fishMaster.top + (200 * Math.random() - 200 * Math.random());
        	allFish[i].timeBetweenSteps = fishMaster.timeBetweenSteps;
        	allFish[i].$node.animate({
	        	left: allFish[i].left,
	        	top: allFish[i].top
	        }, 700);

        }
    });
});