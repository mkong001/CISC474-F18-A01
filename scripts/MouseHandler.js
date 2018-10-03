// setup of the html

var x = 50;
var y = 50;
var w = $(document).width();
var h = $(document).height();
var shotsE= $(document).shotsEffective;
var shotsW= $(document).shotsWrong;

var click = 0;

var html = document.querySelector('html');

function mouseMove(mx, my)
{
	x = mx;
	y = my;

	$('#cursor').css('left', x).css('top', y);
}

html.onclick = function(e)
{
		html.requestPointerLock();
		$('#cursor').css('left', x).css('top', y);
		var blue_truck = $(document.getElementsByClassName("blue_truck"));
		var offset = blue_truck.offset();
		var truck_top = offset.top;
		var truck_bottom = truck_top + blue_truck.height();
		var truck_left = offset.left;
		var truck_right = truck_left + blue_truck.width();
		if (click == 0)
		
		{
			if((x<=truck_right && x>=truck_left) && (y<=truck_bottom && y>=truck_top)){
				shotsE++;
				window.alert("SHOT HIT");
			}else{
				shotsW++;
			}
			
		}
}

// Hook pointer lock state change events for different browsers
document.addEventListener('pointerlockchange', lockChangeAlert, false);
document.addEventListener('mozpointerlockchange', lockChangeAlert, false);
document.addEventListener('webkitpointerlockchange', lockChangeAlert, false);

function lockChangeAlert()
{
	if (document.pointerLockElement === html ||
		document.mozPointerLockElement === html ||
		document.webkitPointerLockElement === html)
	{
		// console.log('The pointer lock status is now locked');
		document.addEventListener("mousemove", htmlLoop, false);
	}
	else
	{
		// console.log('The pointer lock status is now unlocked');
		document.removeEventListener("mousemove", htmlLoop, false);
	}
}

var tracker = document.createElement('p');
var body = document.querySelector('body');
body.appendChild(tracker);
tracker.style.position = 'absolute';
tracker.style.top = '0';
tracker.style.right = '10px';
tracker.style.backgroundColor = 'white';

//The boundaries are set.
function htmlLoop(e)
{
	var blue_truck = $(document.getElementsByClassName("blue_truck"));
	var offset = blue_truck.offset();
	var truck_top = offset.top;
	var truck_bottom = truck_top + blue_truck.height();
	var truck_left = offset.left;
	var truck_right = truck_left + blue_truck.width();

	var movementX = e.movementX ||
		e.mozMovementX ||
		e.webkitMovementX ||
		0;

	var movementY = e.movementY ||
		e.mozMovementY ||
		e.webkitMovementY ||
		0;

	x += movementX;
	y += movementY;

	if (x >= 1200)
	{
		x = 1200;
	}
	else if (x <= 0)
	{
		x = 0;
	}

	if (y >= 800)
	{
		y = 800;
	}
	else if (y <= 0 - 25)
	{
		y = 0 - 25;
	}

	$('#cursor').css('left', x - 20).css('top', y + 7);

	var animation = requestAnimationFrame(htmlLoop);

	tracker.innerHTML = "X position: " + x + ', Y position: ' + y + "Truck Top: " + truck_top + ", Truck Bottom: " + truck_bottom + ", Truck Left: " +  truck_left + ", Truck Right: " + truck_right;
}