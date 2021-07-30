import React, { useState } from "react";
import Card from "./Card";
import Deck from "../scripts/decks";

export default function Cards() {
    const deck = new Deck();
    deck.shuffle();
    let deckOne = [];
    let deckTwo = [];
    deck.cards.forEach((element, index) => {
        if (index % 2) {
            deckOne.push(element)
        } else {
            deckTwo.push(element);
        }
    });

    // let length = deck.cards.length;
    
    const [ count, setCount ] = useState(0);
    const [ tempDeckOne, setTempDeckOne ] = useState();
    const [ tempDeckTwo, setTempDeckTwo ] = useState();
    const handleCount = () => {
        setCount(prevCount => prevCount + 1);
        returnWinner(count);
    }
    function returnWinner(input) {
        if (deckOne[input].number > deckTwo[input].number) {
            let lostCard = deckTwo.shift();
            deckOne.push(lostCard);
            deckOne.push(deckTwo[input]);
            setTempDeckOne(deckOne);
            console.log(tempDeckOne);
            return tempDeckOne;
        };
        if (deckTwo[input].number > deckOne[input].number) {
            let lostCard = deckOne.shift();
            deckTwo.push(lostCard);
            deckTwo.push(deckOne[input]);
            setTempDeckTwo(deckTwo);
            console.log(tempDeckTwo);
            return tempDeckTwo;
        };
    }
    return (
        <div>
            <button onClick={handleCount}>next card {count}</button>
            <Card number={deckOne[count].number} suit={deckOne[count].suit} />
            <Card number={deckTwo[count].number} suit={deckTwo[count].suit} />
        </div>
    )
}