/**
 * Create a new card HTML image.
 * 
 * @param {String} card
 * @param {*} container
 */
export const createCardHTML = (card, container) => {

    const imgCard = document.createElement("img");
    imgCard.src = `assets/cartas/${card}.png`;
    imgCard.classList.add("deck-card");
    container.append(imgCard);
};