
// Pets
const hipodogeInput = document.getElementById('hipodogeInput');
const capipepoInput = document.getElementById('capipepoInput');
const ratigueyaInput = document.getElementById('ratigueyaInput');

const playerChosenPet = document.getElementById('playerChosenPet');

// Buttons
const petBtn = document.getElementById('petBtn');
const fireBtn = document.getElementById('fireBtn');
const waterBtn = document.getElementById('waterBtn');
const earthBtn = document.getElementById('earthBtn');
const restartBtn = document.getElementById('restartBtn');


// Functions
function random(min, max) {
	
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function chooseOpponentPet() {

	let opponentAttack = random(1,3);
	let petOpponent = '';

	if (opponentAttack == 1) {

		petOpponent = 'HIPODOGE';
		alert('LA MASCOTA DE TU OPONENTE SELECCIONADA ES HIPODOGE.');

	} else if (opponentAttack == 2) {

		petOpponent = 'CAPIPEPO';
		alert('LA MASCOTA DE TU OPONENTE SELECCIONADA ES CAPIPEPO.');

	} else {

		petOpponent = 'RATIGUEYA';
		alert('LA MASCOTA DE TU OPONENTE SELECCIONADA ES RATIGUEYA.');
	}

	opponentChosenPet.textContent = petOpponent;
}


function choosePlayerPet(argument) {
	
	let petPlayer = '';

	if (hipodogeInput.checked) {

		petPlayer = 'HIPODOGE';
		alert('TU MASCOTA SELECCIONADA ES HIPODOGE.');

	} else if (capipepoInput.checked) {
		
		petPlayer = 'CAPIPEPO';
		alert('TU MASCOTA SELECCIONADA ES CAPIPEPO.');

	} else if (ratigueyaInput.checked) {
		
		petPlayer = 'RATIGUEYA';
		alert('TU MASCOTA SELECCIONADA ES RATIGUEYA.');

	} else {

		alert('SELECCIONA UNA MASCOTA.');
	}

	playerChosenPet.textContent = petPlayer;

	chooseOpponentPet();
}

petBtn.addEventListener('click', choosePlayerPet);