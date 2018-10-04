// setup of the html

var x = 50;
var y = 50;
var w = $(document).width();
var h = $(document).height();
var shotsE= $(document).shotsEffective;
var shotsW= $(document).shotsWrong;
var score = 0;
var lifecount=3;
//To detect whether the mouse is able to be clicked
var click = 0;
//To detect whether this is the first shot
var first =0;
//0 represents no cellphone, 1 represents with cellphone
var blue_truck_type=0;
var suzuki_type=0;
var reload=0;


var html = document.querySelector('html');

//Random selection
function btruckSelector(){
	var randomNumber= Math.round(Math.random());
	if(randomNumber==1){
		$(".blue_truck").css("background-image", "url('images/blue-truck.png')");
		blue_truck_type=0;
	}else{
		$(".blue_truck").css("background-image", "url('images/blue-truck-phone.png')");
		blue_truck_type=1;
	}
}

//Random selection
function suzukiSelector(){
	var randomNumber2= Math.round(Math.random());
	if(randomNumber2==1){
		// suzuki=$(document.getElementsByClassName("suzuki_phone"));
		$(".suzuki").css("background-image", "url('images/suzuki-phone.png')");
		suzuki_type=1;
	}else{
		// suzuki=$(document.getElementsByClassName("suzuki"));
		$(".suzuki").css("background-image", "url('images/suzuki.png')");
		suzuki_type=0;
	}
}

function mouseMove(mx, my)
{
	x = mx;
	y = my;

	$('#cursor').css('left', x).css('top', y);
}

function resetTimer(){
	if(reload>0){
		reload-=1;
	}
	if(reload==0){
		click=0;
	}
}
function vehicleSelector(){
	btruckSelector();
	suzukiSelector();
}
html.onclick = function(e)
{
		html.requestPointerLock();
		$('#cursor').css('left', x).css('top', y);
		//Fixed the initialize error
		if(first==0){
			first=1;
			score +=50;
			lifecount +=1;
			vehicleSelector();
			reselect=1;
		}
		//obtaining location for blue truck
        var blue_truck = $(document.getElementsByClassName("blue_truck"));
		var blue_offset = blue_truck.offset();
		var truck_top = blue_offset.top;
		var truck_bottom = truck_top + blue_truck.height();
		var truck_left = blue_offset.left;
        var truck_right = truck_left + blue_truck.width();

		//obtaining location for suzuki truck
		
        var suzuki = $(document.getElementsByClassName("suzuki"));
        var suz_offset = suzuki.offset();
        var suz_top = suz_offset.top;
        var suz_bottom = suz_top + suzuki.height();
        var suz_left = suz_offset.left;
        var suz_right = suz_left + suzuki.width();
        
		if (click == 0)
		{
			if((x<=truck_right && x>=truck_left) && (y<=truck_bottom && y>=truck_top)){
				if(blue_truck_type==1){
					score += 100;
				}else{
					score -=50;
					lifecount-=1;
				}
            }
            else if((x<=suz_right && x>=suz_left) && (y<=suz_bottom && y>=suz_top)){
				if(suzuki_type==1){
					score += 100;
				}else{
					score -=50;
					lifecount-=1;
				}
            }   
            else{
				score -= 50;
				lifecount-=1;
			}
			click=1;
			reload=2;
			vehicleSelector();
		// If you shoot any vehicle, after 2 secs you will have a new bullet
		// And re-select the vehicles' type.	
		}else{
			setInterval(resetTimer,1000);
		}

		switch(lifecount){
			case 3:
				$('#life').attr('src','images/threehearts.png');
				break;
			case 2:
				$('#life').attr('src','images/twohearts.png');
				break;
			case 1:
				$('#life').attr('src','images/heart.png');
				break;
			case 0:
				$('#life').attr('src','images/empty.png');
				break;
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

	$('#cursor').css('left', x).css('top', y);
	$(document.getElementById("score")).text(score.toString());
	$(document.getElementById("reload")).text(reload.toString());
	var animation = requestAnimationFrame(htmlLoop);

	tracker.innerHTML = "X position: " + x + ', Y position: ' + y;
}