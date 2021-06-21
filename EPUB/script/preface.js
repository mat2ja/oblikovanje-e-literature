const preface = document.querySelector('#preface');
const prefaceStrofe = document.querySelectorAll('#preface-poem p');
const prefaceBtn = document.querySelector('#anim-toggle');

let noAnimation = true;

prefaceBtn.addEventListener('click', () => {
	console.log('dela');
	if (noAnimation) {
		prefaceAnimation();
		noAnimation = false;
		prefaceBtn.innerHTML = 'Clear animation';
		preface.classList.remove('changebg');
	} else {
		removeAnimation();
		noAnimation = true;
		prefaceBtn.innerHTML = 'Start animation';
		preface.classList.add('changebg');
	}
});

function prefaceAnimation() {
	prefaceStrofe.forEach((strofa, i) => {
		let delay = i * 500;
        console.log(strofa, i)
		setTimeout(() => {
			strofa.classList.add('strofa-animation');
		}, delay);
	});
}
function removeAnimation() {
	prefaceStrofe.forEach((strofa, i) => {
		let delay = i * 200;
		console.log(strofa, i);
		setTimeout(() => {
			strofa.classList.remove('strofa-animation');
		}, delay);
	});
}