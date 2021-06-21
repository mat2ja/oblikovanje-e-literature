document.onload = function () {
	if (navigator && navigator.hasOwnProperty('epubReadingSystem')) {
		doAnimationStuff();
	}
};

const body = document.querySelector('#christmas-greeting');
function doAnimationStuff() {
    body.style.background = '#004643';
    body.style.color = '#f9bc60';
    body.classList.add('hue-rotate')
}
