function size(argumen) {
	return Math.floor(Math.random() * argumen);
};

function getDistance(event, target) {
	var diffX = event.offsetX - target.x;
	var diffY = event.offsetY - target.y;
	return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

function getDistanceHint(distance) {
	if (distance < 10) {
		return "Згорів нахуй! " + clicks;
	} else if (distance < 20) {
		return "Гаряче " + clicks;
	} else if (distance < 40) {
		return "Жарко " + clicks;
	} else if (distance < 80) {
		return "Тепло " + clicks;
	} else if (distance < 160) {
		return "Холодно " + clicks;
	} else if (distance < 320) {
		return "Дуже холодно " + clicks;
	} else {
		return "Замерз нахуй " + clicks;
	}
};

var width = 400;
var height = 400;
var clicks = 15;

var target = {
	x: size(width),
	y: size(height)
};

$("#img").click(function(event) {
	clicks--;
	if (clicks === -1) {
		alert("GAME OVER(((")
	}
	var distance = getDistance(event, target);
	var distanceHint = getDistanceHint(distance);

	$("#distance").text(distanceHint);

	if  (distance < 8) {
		alert("Ти знайшов скарб! Тобі знадобилося " + clicks + " кліків!");
	}
});