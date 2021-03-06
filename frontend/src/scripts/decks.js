const suits = ["♥", "♠", "♦", "♣"]
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

export default class Deck {
    constructor (cards = newDeck()) {
        this.cards = cards;
    }

    get numberOfCards() {
        return this.cards.length;
    }

    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
}

class Card {
    constructor(suit, number) {
        this.suit = suit;
        this.number = number;
    }
}

function newDeck() {
    return suits.flatMap(suit => {
        return numbers.map(number => {
            return new Card(suit, number)
        })
    })
}