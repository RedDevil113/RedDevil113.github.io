var car = document.getElementById('car');

function moveCar(top,left,deg) {
	car.style.left = (parseInt(car.style.left) - left) + 'px';
	car.style.top = (parseInt(car.style.top) - top) + 'px';
	car.style.transform = "translate(-50%,-50%) rotate(" + deg + "deg)";
}

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

	// key
	if( car.style.left == keyO.style.left && car.style.top == keyO.style.top && keyO.classList.contains("keyO") ){
		keyO.classList.remove("keyO");
		car.classList.add("keyO");
	}
	if( car.style.left == keyY.style.left && car.style.top == keyY.style.top && keyY.classList.contains("keyY") ){
		keyY.classList.remove("keyY");
		car.classList.add("keyY");
	}
	if( car.style.left == keyG.style.left && car.style.top == keyG.style.top && keyG.classList.contains("keyG") ){
		keyG.classList.remove("keyG");
		car.classList.add("keyG");
	}
	// house
	if( car.style.left == oHouse.style.left && car.style.top == oHouse.style.top && car.classList.contains("keyO") ){
		oHouse.style.background = 'red';
	}
	if( car.style.left == yHouse.style.left && car.style.top == yHouse.style.top && car.classList.contains("keyY") ){
		yHouse.style.background = 'red';
	}
	if( car.style.left == gHouse.style.left && car.style.top == gHouse.style.top && car.classList.contains("keyG") ){
		gHouse.style.background = 'red';
	}


});