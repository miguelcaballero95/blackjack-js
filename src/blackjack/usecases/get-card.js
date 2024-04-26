/**
 * 
 * Funcion para sacar una carta del deck.
 * 
 * @param {Array<String>} deck es un arreglo de String
 * @returns {String} Devuelve la carta
 */
export const getCard = (deck) => {

    if (!deck || deck.length <= 0)
        throw 'No hay cartas en el deck';

    return deck.pop();
}
