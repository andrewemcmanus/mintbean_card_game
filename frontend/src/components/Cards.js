import React, { useState } from "react";
import Card from "./Card";
import Deck from "../scripts/decks";

export default function Cards() {
    const deck = new Deck();
    deck.shuffle();
    let initDeckOne = [];
    let initDeckTwo = [];
    deck.cards.forEach((element, index) => {
        if (index % 2) {
            initDeckOne.push(element)
        } else {
            initDeckTwo.push(element);
        }
    });

    // let length = deck.cards.length;
    
    const [ count, setCount ] = useState(0);
    const [ deckOne, setDeckOne ] = useState(initDeckOne);
    const [ deckTwo, setDeckTwo ] = useState(initDeckTwo);
    const handleCount = () => {
        setCount(prevCount => prevCount + 1);
    }
    function returnWinner(input) {
        if (deckOne[input].number > deckTwo[input].number) {
            let lostCard = deckTwo.shift();
            deckOne.push(lostCard);
            deckOne.push(deckTwo[input]);
            setDeckOne(deckOne);
            console.log(deckOne);
            return deckOne;
        };
        if (deckTwo[input].number > deckOne[input].number) {
            let lostCard = deckOne.shift();
            deckTwo.push(lostCard);
            deckTwo.push(deckOne[input]);
            setDeckTwo(deckTwo);
            console.log(deckTwo);
            return deckTwo;
        };
    }
    return (
        <div>
            <button onClick={(e) => {
                // e.preventDefault;
                handleCount();
                returnWinner(count);
            }}>next card {count}</button>
            <Card number={deckOne[count].number} suit={deckOne[count].suit} />
            <Card number={deckTwo[count].number} suit={deckTwo[count].suit} />
        </div>
    )
}