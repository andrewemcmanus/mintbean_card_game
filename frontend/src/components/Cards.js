import React, { useState } from "react";
import Card from "./Card";
import Deck from "../scripts/decks";
import War from "../scripts/War";
import toInt from "../scripts/toInt";

export default function Cards() {
    const deck = new Deck();
    deck.shuffle();
    let initDeckOne = [];
    let initDeckTwo = [];
    deck.cards.forEach((element, index) => {
        if (index % 2) {
            initDeckOne.push(element);
        } else {
            initDeckTwo.push(element);
        }
    });
    
    const [ count, setCount ] = useState(0);
    const [ deckOne, setDeckOne ] = useState(initDeckOne);
    const [ deckTwo, setDeckTwo ] = useState(initDeckTwo);
    const handleCount = () => {
        setCount(prevCount => prevCount + 1);
        // setCount(0);
    }
    
    async function returnWinner(input) {
        let one = toInt(deckOne[input].number);
        let two = toInt(deckTwo[input].number);
        if (one > two) {
            let lostCard = deckTwo.shift();
            // deckTwo.shift();
            deckOne.push(deckOne.shift());
            deckOne.push(lostCard);
            setDeckOne(deckOne);
            setDeckTwo(deckTwo);
            if (deckOne.length > 51) {
                alert("Player 1 wins!");
                return deckOne;
            }
            console.log(`Player 1 won: ${deckOne.length} Player 2 lost: ${deckTwo.length}`);
            return deckOne;
        };
        if (two > one) {
            let lostCard = deckOne.shift();
            // deckOne.shift();
            deckTwo.push(deckTwo.shift());
            deckTwo.push(lostCard);
            setDeckTwo(deckTwo);
            setDeckOne(deckOne);
            if (deckTwo.length > 51) {
                alert("Player 2 wins!");
                return deckTwo;
            };
            console.log(`Player 2 won: ${deckTwo.length} Player 1 lost: ${deckOne.length}`);
            return deckTwo;
        };
        if (two === one) {
            War(deckOne, deckTwo);
        }
        
    }
    // For War: script or component?
    return (
        <div>
            <button onClick={() => {
                // e.preventDefault;
                handleCount();
                returnWinner(count);
                // setCount(0);
            }}>next card</button>
            {/* return these things farther up? */}
            <Card number={deckOne[0].number} suit={deckOne[0].suit}/>
            <Card number={deckTwo[0].number} suit={deckTwo[0].suit} />
        </div>
    )
}