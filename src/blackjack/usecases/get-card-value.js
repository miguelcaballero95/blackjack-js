/**
 * Esta funcion obtiene el valor de la carta
 * 
 * @param {String} carta 
 * @returns {Number} Devuelve el valor de la carta.
 */
export const getCardValue = (carta) => {

    let puntos = 0;

    //Extraer el numero, no el tipo
    const valor = carta.substring(0, carta.length - 1);

    if (isNaN(valor)) {
        // No es un numero
        puntos = (valor === 'A') ? 11 : 10;
    } else {
        // Es un numero
        puntos = parseInt(valor);
    }
    return puntos;
}
