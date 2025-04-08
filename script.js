const infoIconDiv = document.getElementById('info-icon-div');
const leaveInfoIconDiv = document.getElementById('leave-info-icon-div');
const infoBackground = document.getElementById('info-background');
const lrs = document.getElementsByClassName('lr');

infoIconDiv.addEventListener('click', () => {
	infoBackground.style.display = 'block';
	for (let i = 0; i < lrs.length; i++) {
		lrs[i].style.filter = 'blur(5px)';
	}
});

leaveInfoIconDiv.addEventListener('click', () => {
	infoBackground.classList.add('slide-out');
	for (let i = 0; i < lrs.length; i++) {
		lrs[i].style.filter = 'blur(0px)';
	}
});

infoBackground.addEventListener('animationend', () => {
	if (infoBackground.classList.contains('slide-out')) {
		infoBackground.style.display = 'none';
		infoBackground.classList.remove('slide-out');
	}
});
