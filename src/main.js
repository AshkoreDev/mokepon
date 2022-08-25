import './js/nodes.js';

let playerAttack = '';
let opponentAttack = '';
let fightResults = '';
let playerLives = 3;
let opponentLives = 3;
let finalResults = '';


// Functions
function random(min, max) {
	
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function chooseOpponentPet() {

	let randomOpponent = random(1,3);
	let petOpponent = '';

	if (randomOpponent == 1) {

		petOpponent = 'HIPODOGE';

	} else if (randomOpponent == 2) {

		petOpponent = 'CAPIPEPO';

	} else {

		petOpponent = 'RATIGUEYA';
	}

	opponentChosenPet.textContent = petOpponent;
}


function choosePlayerPet() {
	
	let petPlayer = '';

	if (hipodogeInput.checked) {

		petPlayer = 'HIPODOGE';

	} else if (capipepoInput.checked) {
		
		petPlayer = 'CAPIPEPO';

	} else if (ratigueyaInput.checked) {
		
		petPlayer = 'RATIGUEYA';

	} else {

		petChooseSection.style.display = 'none';
		failMessage.style.display = 'block';
		restartGame();
	}

	// hipodogeInput.disabled = true;
	// capipepoInput.disabled = true;
	// ratigueyaInput.disabled = true;
	petChooseBtn.disabled = true;
	fireBtn.disabled = false;
	waterBtn.disabled = false;
	earthBtn.disabled = false;

	playerChosenPet.textContent = petPlayer;
	playerPetLives.textContent = playerLives;
	opponentPetLives.textContent = opponentLives;
	

	if (hipodogeInput.checked || capipepoInput.checked || ratigueyaInput.checked) {

		petChooseSection.style.display = 'none';
		attackChooseSection.style.display = 'block';
		chooseOpponentPet();
	}
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
	const finalResult = document.createElement('p');

	opponentChosenAttack.className = 'message--item';
	fightResult.className = 'message--item--result';

	playerChosenAttack.textContent = `TÚ ATAQUE FUE: ${playerAttack}.`;

	opponentChosenAttack.textContent = `EL ATAQUE DE TÚ OPONENTE FUE: ${opponentAttack}.`;

	fightResult.textContent = fightResults;
	finalResult.textContent = `RESULTADO FINAL: ${finalResults}...`;

	messageSection.appendChild(playerChosenAttack);
	messageSection.appendChild(opponentChosenAttack);
	messageSection.appendChild(fightResult);

	if (opponentLives == 0 || playerLives == 0) {

		messageSection.appendChild(finalResult);
	}
	
	messageSection.scrollTop = messageSection.scrollHeight;
}

function fight() {

	if (playerAttack == opponentAttack) {

		fightResults = 'HUBO UN EMPATE.';

	} else if (playerAttack == 'FUEGO' && opponentAttack == 'TIERRA' || playerAttack == 'AGUA' && opponentAttack == 'FUEGO' || playerAttack == 'TIERRA' && opponentAttack == 'AGUA') {

		fightResults = 'GANASTE LA PARTIDA.';
		opponentLives--;
		
	} else {

		fightResults = 'PERDISTE LA PARTIDA.';
		playerLives--;
	}

	playerPetLives.textContent = playerLives;
	opponentPetLives.textContent = opponentLives;

	lives();
	createMessages();
}

function lives() {
	
	if (opponentLives == 0 || playerLives == 0) {

		fireBtn.disabled = true;
		waterBtn.disabled = true;
		earthBtn.disabled = true;

		if (opponentLives == 0) {

			finalResults = 'GANASTE';

		} else if (playerLives == 0) {

			finalResults = 'PERDISTE';
		}

		restartSection.style.display = 'block';
	} 
}

function restartGame() {
	
	setTimeout(() => location.reload(), 1000);
}

function startGame() {
	
	startGameSection.style.display = 'block';
	startGameSection.classList.add('loader');

	setTimeout(() => {
		
		petChooseSection.style.display = 'block';
		petChooseBtn.disabled = false;
		onBtn.disabled = true;
		
	} , 4000);
}

petChooseBtn.addEventListener('click', choosePlayerPet);
fireBtn.addEventListener('click', fireAttack);
waterBtn.addEventListener('click', waterAttack);
earthBtn.addEventListener('click', earthAttack);
restartBtn.addEventListener('click', restartGame);
onBtn.addEventListener('click', startGame);