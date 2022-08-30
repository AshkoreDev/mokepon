const nodes = (id) => document.querySelector(id);

// Sections
const petChooseSection = nodes('#petChooseSection');
const attackChooseSection = nodes('#attackChooseSection');
const messageSection = nodes('#messageSection');
const startGameSection = nodes('#startGameSection');


// Inputs
const hipodogeInput = nodes('#hipodogeInput');
const capipepoInput = nodes('#capipepoInput');
const ratigueyaInput = nodes('#ratigueyaInput');

// Buttons
const petChooseBtn = nodes('#petChooseBtn');
const fireBtn = nodes('#fireBtn');
const waterBtn = nodes('#waterBtn');
const earthBtn = nodes('#earthBtn');
const restartBtn = nodes('#restartBtn');

// Paragraphs
const playerChosenPet = nodes('#playerChosenPet');
const opponentChosenPet = nodes('#opponentChosenPet');

const playerPetLives = nodes('#playerPetLives');
const opponentPetLives = nodes('#opponentPetLives');

const failMessage = nodes('#failMessage');