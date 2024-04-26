import { createCardHTML } from "./create-card-html";
import { getCard } from "./get-card";
import { updateScore } from "./update-score";

export const computerTurn = (deck, playerScore) => {

    const computerCards = document.querySelector("#computer-container .cards");
    const computerScoreContainer = document.querySelector("#computer-container small");

    let computerScore = 0;

    do {

        const card = getCard(deck);


        computerScore = updateScore(card, computerScore, computerScoreContainer);
        createCardHTML(card, computerCards);



        if (playerScore > 21) break;

    } while (computerScore < playerScore);


    setTimeout(() => {
        if (computerScore == playerScore)
            alert("Tie!!");
        else if (computerScore > 21)
            alert("Congratulations!! You won.");
        else
            alert("Computer wins, try again.");
    }, 150);

};