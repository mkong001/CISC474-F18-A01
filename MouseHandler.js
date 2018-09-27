// setup of the html

var x = 50;
var y = 50;
var w = $(document).width();
var h = $(document).height();

var lock = 0;
var click = 0;

// window.addEventListener('load', eventWindowLoaded, false);
var html = document.querySelector('html');

function mouseMove(mx, my)
{
	x = mx;
	y = my;

	$('#cursor').css('left', x).css('top', y);
}

$(function()
{
	$("#testButton").on("click", function(e)
	{
		mouseMove(x + 100, y + 100);
	});
});


html.onclick = function(e)
{
	if (lock == 0)
	{
		lock = 1;
		x = e.clientX;
		y = e.clientY;
		html.requestPointerLock();
		$('#cursor').css('left', x).css('top', y);
	}
	else
	{
		if (click == 0)
		{
			click = 1;
			$(document.elementFromPoint(x, y + 10)).click();
			setTimeout(function()
			{
				click = 0;
			}, 100);
		}
        lock = 0;
        x = e.clientX;
        y = e.clientY;
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
		document.addEventListener("mousemove", forHtml
	, false);
	}
	else
	{
		// console.log('The pointer lock status is now unlocked');
		document.removeEventListener("mousemove", forHtml
	, false);
	}
}

var tracker = document.createElement('p');
var body = document.querySelector('body');
body.appendChild(tracker);
tracker.style.position = 'absolute';
tracker.style.top = '0';
tracker.style.right = '10px';
tracker.style.backgroundColor = 'white';

function forHtml(e)
{

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

	if (x >= w + 20)
	{
		x = w + 20;
	}
	else if (x <= 0)
	{
		x = 0;
	}

	if (y >= h + 25)
	{
		y = h + 25;
	}
	else if (y <= 0 - 25)
	{
		y = 0 - 25;
	}

	$('#cursor').css('left', x - 20).css('top', y + 7);

	var animation = requestAnimationFrame(forHtml
	);

	tracker.innerHTML = "X position: " + x + ', Y position: ' + y;
}