
/* --- global variables --- */
var car = document.getElementById('car'),
	counter = document.getElementById('counter'),
	i = 0;

/* --- functions --- */
function moveCar(top,left,deg) {
	car.style.left = (parseInt(car.style.left) - left) + 'px';
	car.style.top = (parseInt(car.style.top) - top) + 'px';
	car.style.transform = "translate(-50%,-50%) rotate(" + deg + "deg)";
}

function count(){
	i++;
	counter.innerHTML = 'Ход :<span>'+ i +'</span>';
	return i;
}

/* --- Event --- */
window.addEventListener('keyup', function(event){

	if(event.keyCode == 37){
		if(car.style.left != '0px' && car.style.left != '25px')
			moveCar(0,150,90);//setTimeout(moveCar,200,0,150,90);
	}
	if(event.keyCode == 39){
		if(car.style.left != '475px')
			moveCar(0,-150,-90);//setTimeout(moveCar,200,0,-150,-90);
	}
	if(event.keyCode == 38){
		if(car.style.top != '0px' && car.style.top != '25px')
			moveCar(150,0,-180);//setTimeout(moveCar,200,150,0,-180);
	}
	if(event.keyCode == 40){
		if(car.style.top != '775px')
			moveCar(-150,0,0);//setTimeout(moveCar,200,-150,0,0);
	}

	if(event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40){
		count();
	}
	

	// key
	if(car.classList.length < 3){
		if( car.style.left == keyR.style.left && car.style.top == keyR.style.top && keyR.classList.contains("keyR") ){
			keyR.classList.add("keyR-tr");
			car.classList.add("keyR");
		}
		if( car.style.left == keyO.style.left && car.style.top == keyO.style.top && keyO.classList.contains("keyO") ){
			keyO.classList.add("keyO-tr");
			car.classList.add("keyO");
		}
		if( car.style.left == keyY.style.left && car.style.top == keyY.style.top && keyY.classList.contains("keyY") ){
			keyY.classList.add("keyY-tr");
			car.classList.add("keyY");
		}
		if( car.style.left == keyG.style.left && car.style.top == keyG.style.top && keyG.classList.contains("keyG") ){
			keyG.classList.add("keyG-tr");
			car.classList.add("keyG");
		}
	}
	// house
	if( car.style.left == rHouse.style.left && car.style.top == rHouse.style.top && car.classList.contains("keyR") ){
		rHouse.classList.add('checked');
		keyR.classList.remove("keyR");
		car.classList.remove("keyR");
	}
	if( car.style.left == oHouse.style.left && car.style.top == oHouse.style.top && car.classList.contains("keyO") ){
		oHouse.classList.add('checked');
		keyO.classList.remove("keyO");
		car.classList.remove("keyO");
	}
	if( car.style.left == yHouse.style.left && car.style.top == yHouse.style.top && car.classList.contains("keyY") ){
		yHouse.classList.add('checked');
		keyY.classList.remove("keyY");
		car.classList.remove("keyY");
	}
	if( car.style.left == gHouse.style.left && car.style.top == gHouse.style.top && car.classList.contains("keyG") ){
		gHouse.classList.add('checked');
		keyG.classList.remove("keyG");
		car.classList.remove("keyG");
	}
	

	if(i == 30){
		document.body.classList.add("loss");
	}

	if( rHouse.classList.contains("checked") && oHouse.classList.contains("checked") && yHouse.classList.contains("checked") && gHouse.classList.contains("checked") ){
		document.body.classList.add("win");
	}

});
