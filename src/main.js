
// Pets
const hipodoge = document.getElementById('hipodoge');
const capipepo = document.getElementById('capipepo');
const ratigueya = document.getElementById('ratigueya');

// Buttons
const petBtn = document.getElementById('petBtn');
const fireBtn = document.getElementById('fireBtn');
const waterBtn = document.getElementById('waterBtn');
const earthBtn = document.getElementById('earthBtn');
const restartBtn = document.getElementById('restartBtn');


// Functions
function petChoice(argument) {
	
	if (hipodoge.checked) {

		alert('TU MASCOTA SELECCIONADA ES HIPODOGE.');

	} else if (capipepo.checked) {
		
		alert('TU MASCOTA SELECCIONADA ES CAPIPEPO.');

	} else if (ratigueya.checked) {
		
		alert('TU MASCOTA SELECCIONADA ES RATIGUEYA.');

	} else {

		alert('SELECCIONA UNA MASCOTA.');
	}

}

petBtn.addEventListener('click', petChoice);