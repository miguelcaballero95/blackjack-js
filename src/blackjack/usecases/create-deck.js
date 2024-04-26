import { shuffle } from "underscore";

const suits = ['C', 'D', 'H', 'S'],
    numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

/**
 * 
 * Create a new shuffled deck.
 * 
 * @returns {Array<String>} returns a new shuffled deck.
 */
export const createDeck = () => {
    let deck = [];
    for (let number of numbers) {
        for (let suit of suits) {
            deck.push(number + suit)
        }
    }
    // Shuffle comes from _ 
    return shuffle(deck);
}