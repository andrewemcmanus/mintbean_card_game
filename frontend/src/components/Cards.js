import React, { useState } from "react";
import Card from "./Card";
import Deck from "../scripts/decks";
// import War from "../scripts/War";
import toInt from "../scripts/toInt";

export default function Cards() {
    const deck = new Deck();
    deck.shuffle();
    let initDeckOne = [];
    let initDeckTwo = [];
    deck.cards.forEach((element, index) => {
        if (index < 26 ) {
            initDeckOne.push(element);
        } else {
            initDeckTwo.push(element);
        }
    });
    
    // const [ count, setCount ] = useState(0);
    const [ deckOne, setDeckOne ] = useState(initDeckOne);
    const [ deckOneTopCard, setDeckOneTopCard ] = useState(deckOne[0]);
    const [ deckTwo, setDeckTwo ] = useState(initDeckTwo);
    const [ deckTwoTopCard, setDeckTwoTopCard ] = useState(deckTwo[0]);
    // const handleCount = () => {
    //     setCount(prevCount => prevCount + 1);
    //     // setCount(0);
    // }
    
    async function returnWinner(deckA, deckB) {
        let one = toInt(deckA[0].number);
        let two = toInt(deckB[0].number);
        if (one > two) {
            let lostCard = deckB.shift();
            // deckTwo.shift();
            deckA.push(deckA.shift());
            deckA.push(lostCard);
            setDeckOne(deckA);
            setDeckOneTopCard(deckA[0]);
            setDeckTwo(deckB);
            setDeckTwoTopCard(deckB[0]);
            if (deckA.length > 51) {
                alert("Player 1 wins!");
                return deckOne;
            }
            console.log(`Player 1 won: ${deckOne.length} Player 2 lost: ${deckTwo.length}`);
            return deckOne;
        };
        if (two > one) {
            let lostCard = deckA.shift();
            // deckOne.shift();
            deckB.push(deckB.shift());
            deckB.push(lostCard);
            setDeckTwo(deckB);
            setDeckTwoTopCard(deckB[0]);
            setDeckOne(deckA);
            setDeckOneTopCard(deckA[0]);
            if (deckB.length > 51) {
                alert("Player 2 wins!");
                return deckTwo;
            };
            console.log(`Player 2 won: ${deckTwo.length} Player 1 lost: ${deckOne.length}`);
            return deckTwo;
        };
        if (two === one) {
            let warCardsA = [deckA[0], deckA[1], deckA[2]];
            let warCardsB = [deckB[0], deckB[1], deckB[2]];
            
            let playerAHand = [toInt(deckA[1].number), toInt(deckA[2].number)];
            let playerBHand = [toInt(deckB[1].number), toInt(deckB[2].number)];
            let firstPlayerChoice = Math.max(...playerAHand);
            // console.log(firstPlayerChoice)
            let secondPlayerChoice = Math.max(...playerBHand)
            if (firstPlayerChoice > secondPlayerChoice) {
                warCardsB.forEach((element) => (deckA.push(element)))
                deckB.splice(0, 3);
                setDeckOne(deckA);
                setDeckOneTopCard(deckA[0]);
                setDeckTwo(deckB);
                setDeckTwoTopCard(deckB[0]);
                if (deckA.length > 51) {
                    alert("Player 1 wins!");
                    return deckA;
                }
                console.log(`Player 1 won: ${deckA.length} Player 2 lost: ${deckB.length}`);
                return deckA;
            };
            if (secondPlayerChoice > firstPlayerChoice) {
                warCardsA.forEach((element) => (deckB.push(element)))
                deckA.splice(0,3);
                setDeckOne(deckA);
                setDeckOneTopCard(deckA[0]);
                setDeckTwo(deckB);
                setDeckTwoTopCard(deckB[0]);
                if (deckA.length > 51) {
                    alert("Player 2 wins!");
                    return deckB;
                }
                console.log(`Player 2 won: ${deckB.length} Player 1 lost: ${deckA.length}`);
                return deckB;
            };
            if (firstPlayerChoice === secondPlayerChoice) {
                // simpler for now: no one changes any cards
                setDeckOne(deckA);
                setDeckOneTopCard(deckA[0]);
                setDeckTwo(deckB);
                setDeckTwoTopCard(deckB[0]);
            }
        }
    }
    return (
        <div>
            <button onClick={() => {
                returnWinner(deckOne, deckTwo);
            }}>next card</button>
            <Card number={deckOneTopCard.number} suit={deckOneTopCard.suit} score={deckOne.length}/>
            <Card number={deckTwoTopCard.number} suit={deckTwoTopCard.suit} score={deckTwo.length}/>
        </div>
    )
}