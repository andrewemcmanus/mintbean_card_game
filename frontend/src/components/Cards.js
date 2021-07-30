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
    
    const [ count, setCount ] = useState(0);
    const [ deckOne, setDeckOne ] = useState(initDeckOne);
    const [ deckTwo, setDeckTwo ] = useState(initDeckTwo);
    const handleCount = () => {
        setCount(prevCount => prevCount + 1);
    }
    function toInt(num) {
        if (num === "J") {
            let int = 11;
            return int;
        } else if (num === "Q") {
            let int = 12;
            return int;
        } else if (num === "K") {
            let int = 13;
            return int;
        } else if (num === "A" ) {
            let int = 1;
            return int;
        } else {
            let int = parseInt(num);
            return int;
        }

    }
    function returnWinner(input) {
        let one = toInt(deckOne[input].number);
        let two = toInt(deckTwo[input].number);
        if (one > two) {
            let lostCard = deckTwo.shift();
            // deckTwo.shift();
            deckOne.push(deckOne.shift());
            deckOne.push(lostCard);
            setDeckOne(deckOne);
            setDeckTwo(deckTwo);
            setCount(0);
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
                handleCount();
                returnWinner(count);
            }}>next card</button>
            {/* issue with count and array length? */}
            <Card number={deckOne[0].number} suit={deckOne[0].suit}/>
            <Card number={deckTwo[0].number} suit={deckTwo[0].suit} />
        </div>
    )
}