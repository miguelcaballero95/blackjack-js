import { createDeck, getCard, computerTurn, createCardHTML, updateScore } from "./usecases";

// Player variables
const playerScoreContainer = document.querySelector("#player-container small"),
    playerCards = document.querySelector("#player-container .cards");
let playerScore = 0;

// Computer variables

const computerScoreContainer = document.querySelector("#computer-container small"),
    computerCards = document.querySelector("#computer-container .cards");
let computerScore = 0;

// Buttons
const hitBtn = document.querySelector("#btnHit"),
    standBtn = document.querySelector("#btnStand"),
    newGameBtn = document.querySelector("#btnNewGame");

let deck = [];


/**
 * Create a new game.
 * 
 */
export const startGame = () => {

    // Create a new deck.
    deck = createDeck();

    playerScore = 0;
    computerScore = 0

    hitBtn.disabled = false;
    standBtn.disabled = false;

    playerScoreContainer.innerText = 0;
    computerScoreContainer.innerText = 0;

    playerCards.innerHTML = '';
    computerCards.innerHTML = '';

};

hitBtn.addEventListener("click", () => {

    const card = getCard(deck);

    playerScore = updateScore(card, playerScore, playerScoreContainer);

    createCardHTML(card, playerCards);

    // If player reach more than 21 points, the computer turn starts
    if (playerScore > 21) {
        hitBtn.disabled = true;
        standBtn.disabled = true;
        computerTurn(deck, playerScore);
    }
});

standBtn.addEventListener("click", () => {
    hitBtn.disabled = true;
    standBtn.disabled = true;
    computerTurn(deck, playerScore);
});

newGameBtn.addEventListener("click", () => {
    startGame();
});
