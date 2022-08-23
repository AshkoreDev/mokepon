
let playerAttack = '';
let opponentAttack = '';
let fightResults = '';
let playerLives = 3;
let opponentLives = 3;

// Pets
const hipodogeInput = document.getElementById('hipodogeInput');
const capipepoInput = document.getElementById('capipepoInput');
const ratigueyaInput = document.getElementById('ratigueyaInput');

const playerChosenPet = document.getElementById('playerChosenPet');
const opponentChosenPet = document.getElementById('opponentChosenPet');

const playerPetLives = document.getElementById('playerPetLives');
const opponentPetLives = document.getElementById('opponentPetLives');

const messages = document.getElementById('messages');


// Buttons
const petBtn = document.getElementById('petBtn');
const fireBtn = document.getElementById('fireBtn');
const waterBtn = document.getElementById('waterBtn');
const earthBtn = document.getElementById('earthBtn');
const restartBtn = document.getElementById('restartBtn');

// Sections
const attackChoose = document.getElementById('attackChoose');
const restart = document.getElementById('restart');


// Functions
function random(min, max) {
	
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function chooseOpponentPet() {

	let randomOpponent = random(1,3);
	let petOpponent = '';

	if (randomOpponent == 1) {

		petOpponent = 'HIPODOGE';
		alert('LA MASCOTA DE TU OPONENTE SELECCIONADA ES HIPODOGE.');

	} else if (randomOpponent == 2) {

		petOpponent = 'CAPIPEPO';
		alert('LA MASCOTA DE TU OPONENTE SELECCIONADA ES CAPIPEPO.');

	} else {

		petOpponent = 'RATIGUEYA';
		alert('LA MASCOTA DE TU OPONENTE SELECCIONADA ES RATIGUEYA.');
	}

	opponentChosenPet.textContent = petOpponent;
	attackChoose.style.display = 'block';
}


function choosePlayerPet() {
	
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
		restartGame();
	}

	hipodogeInput.disabled = true;
	capipepoInput.disabled = true;
	ratigueyaInput.disabled = true;
	petBtn.disabled = true;

	playerChosenPet.textContent = petPlayer;

	chooseOpponentPet();
}

function fireAttack() {
	
	playerAttack = 'FUEGO';
	chooseOpponentAttack();
}

function waterAttack() {
	
	playerAttack = 'AGUA';	
	chooseOpponentAttack();
}

function earthAttack() {
	
	playerAttack = 'TIERRA';
	chooseOpponentAttack();
}

function chooseOpponentAttack() {
	
	let randomOpponentAttack = random(1,3);

	if (randomOpponentAttack == 1) {

		opponentAttack = 'FUEGO';

	} else if (randomOpponentAttack == 2) {

		opponentAttack = 'AGUA';

	} else if (randomOpponentAttack == 3) {

		opponentAttack = 'TIERRA';
	}

	fight();	
}

function createMessages() {
	
	const playerChosenAttack = document.createElement('p');
	const opponentChosenAttack = document.createElement('p');

	const fightResult = document.createElement('p');

	playerChosenAttack.textContent = `Tú mascota atacó con ${playerAttack}`;

	opponentChosenAttack.textContent = `La mascota de tú oponente atacó con ${opponentAttack}`;

	fightResult.textContent = fightResults;

	messages.appendChild(playerChosenAttack);
	messages.appendChild(opponentChosenAttack);
	messages.appendChild(fightResult);
}

function fight(argument) {

	if (playerAttack == opponentAttack) {

		fightResults = 'HUBO UN EMPATE.';

	} else if (playerAttack == 'FUEGO' && opponentAttack == 'TIERRA' || playerAttack == 'AGUA' && opponentAttack == 'FUEGO' || playerAttack == 'TIERRA' && opponentAttack == 'AGUA') {

		fightResults = 'GANASTE.';
		opponentLives--;
		
	} else {

		fightResults = 'PERDISTE.';
		playerLives--;
	}

	playerPetLives.textContent = playerLives;
	opponentPetLives.textContent = opponentLives;

	createMessages();
	lives();
}

function lives(argument) {
	
	if (opponentLives == 0 || playerLives == 0) {

		fireBtn.disabled = true;
		waterBtn.disabled = true;
		earthBtn.disabled = true;

		if (opponentLives == 0) {

			alert('GANASTE.');

		} else if (playerLives == 0) {

			alert('PERDISTE.');
		}

		restart.style.display = 'block';
	} 
}


function restartGame() {
	
	location.reload();
}

petBtn.addEventListener('click', choosePlayerPet);
fireBtn.addEventListener('click', fireAttack);
waterBtn.addEventListener('click', waterAttack);
earthBtn.addEventListener('click', earthAttack);
restartBtn.addEventListener('click', restartGame);