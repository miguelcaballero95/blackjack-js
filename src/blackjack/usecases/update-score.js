import { getCardValue } from "./get-card-value";

/**
 * Update player or computer score and show.
 * @param {String} card 
 * @param {String} player 
 * @returns {Number}
 */
export const updateScore = (card, currentScore, container) => {
    currentScore += getCardValue(card);
    container.innerText = currentScore;
    return currentScore;
};