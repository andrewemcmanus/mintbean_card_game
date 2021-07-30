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
            initDeckOne.push(element);
        } else {
            initDeckTwo.push(element);
        }
    });
    
    // const [ count, setCount ] = useState(0);
    const [ deckOne, setDeckOne ] = useState(initDeckOne);
    const [ deckTwo, setDeckTwo ] = useState(initDeckTwo);
    // const handleCount = () => {
    //     setCount(prevCount => prevCount + 1);
    // }
    function returnWinner(input) {
        if (deckOne[input].number > deckTwo[input].number) {
            let lostCard = deckTwo.shift();
            deckOne.push(deckOne.shift());
            deckOne.push(lostCard);
            setDeckOne(deckOne);
            setDeckTwo(deckTwo);
            // setCount(0);
            if (deckOne.length > 51) {
                alert("Player 1 wins!");
                return deckOne;
            }
            console.log(`Player 1 won: ${deckOne.length} Player 2 lost: ${deckTwo.length}`);
            return deckOne;
        };
        if (deckTwo[input].number > deckOne[input].number) {
            let lostCard = deckOne.shift();
            deckTwo.push(deckTwo.shift());
            deckTwo.push(lostCard);
            setDeckTwo(deckTwo);
            setDeckOne(deckOne);
            // setCount(0);
            if (deckTwo.length > 51) {
                alert("Player 2 wins!");
                return deckTwo;
            };
            console.log(`Player 2 won: ${deckTwo.length} Player 1 lost: ${deckOne.length}`);
            return deckTwo;
        };
        
    }
    // For War: script or component?
    return (
        <div>
            <button onClick={() => {
                // e.preventDefault;
                // handleCount();
                returnWinner(0);
            }}>next card</button>
            {/* issue with count and array length? */}
            <Card number={deckOne[0].number} suit={deckOne[0].suit}/>
            <Card number={deckTwo[0].number} suit={deckTwo[0].suit} />
        </div>
    )
}