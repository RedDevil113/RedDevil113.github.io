var overlay = document.getElementById('overlay'),
	modal = document.getElementsByClassName('modal'),
	button = document.getElementsByClassName('button-modal');

for(var i = 0; i < button.length; i++){
	button[i].addEventListener('click', function(e){

		e.preventDefault();
		//document.body.style.overflow = 'hidden';

		var attr = this.getAttribute('href'),
			div = document.getElementById(attr);

		div.classList.add('open-modal');
		overlay.classList.add('open-overlay');

		var cancel = document.createElement('div');
		cancel.className = 'cancel';
		div.appendChild(cancel);

		cancel.addEventListener('click', function(){
			div.classList.remove('open-modal');
			overlay.classList.remove('open-overlay');
			div.removeChild(cancel);
			//document.body.style.overflow = 'visible';
		});

	});
}

function modalS(option){
	var width = option.width || 300;
	var height = option.height || 'auto';
	var bg = option.bg || 'white';
	for(var i = 0; i < modal.length; i++){
		modal[i].style.maxWidth = width + 'px';
		modal[i].style.height = height + 'px';
		modal[i].style.background = bg;
	}
}