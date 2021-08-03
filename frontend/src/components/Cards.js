import React, { useState } from "react";
import Card from "./Card";
import WarCards from "./WarCards";
import Deck from "../scripts/decks";
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
    
    const [ deckOne, setDeckOne ] = useState(initDeckOne);
    const [ deckOneTopCard, setDeckOneTopCard ] = useState(deckOne[0]);
    const [ deckTwo, setDeckTwo ] = useState(initDeckTwo);
    const [ deckTwoTopCard, setDeckTwoTopCard ] = useState(deckTwo[0]);
    
    function returnWinner(deckA, deckB) {
        let one = toInt(deckA[0].number);
        let two = toInt(deckB[0].number);
        if (one > two) {
            let lostCard = deckB.shift();
            deckA.push(deckA.shift());
            deckA.push(lostCard);
            setDeckOne(deckA);
            setDeckOneTopCard(deckA[0]);
            setDeckTwo(deckB);
            setDeckTwoTopCard(deckB[0]);
            return deckOne;
        };
        if (two > one) {
            let lostCard = deckA.shift();
            deckB.push(deckB.shift());
            deckB.push(lostCard);
            setDeckTwo(deckB);
            setDeckTwoTopCard(deckB[0]);
            setDeckOne(deckA);
            setDeckOneTopCard(deckA[0]);
            return deckTwo;
        };
        if (two === one) {
            let warCardsA = [deckA[0], deckA[1], deckA[2]];
            let warCardsB = [deckB[0], deckB[1], deckB[2]];
            
            let playerAHand = [toInt(deckA[1].number), toInt(deckA[2].number)];
            let playerBHand = [toInt(deckB[1].number), toInt(deckB[2].number)];
            let firstPlayerChoice = Math.max(...playerAHand);
            let secondPlayerChoice = Math.max(...playerBHand)
            if (firstPlayerChoice > secondPlayerChoice) {
                warCardsB.forEach((element) => (deckA.push(element)))
                deckB.splice(0, 3);
                setDeckOne(deckA);
                setDeckOneTopCard(deckA[0]);
                setDeckTwo(deckB);
                setDeckTwoTopCard(deckB[0]);
                return deckA;
            };
            if (secondPlayerChoice > firstPlayerChoice) {
                warCardsA.forEach((element) => (deckB.push(element)))
                deckA.splice(0,3);
                setDeckOne(deckA);
                setDeckOneTopCard(deckA[0]);
                setDeckTwo(deckB);
                setDeckTwoTopCard(deckB[0]);
                return deckB;
            };
            if (firstPlayerChoice === secondPlayerChoice) {
                // simpler for now: no one changes any cards
                // (rather than run War again)
                deckA.push(deckA.shift());
                deckB.push(deckB.shift());
                setDeckOne(deckA);
                setDeckOneTopCard(deckA[0]);
                setDeckTwo(deckB);
                setDeckTwoTopCard(deckB[0]);
                return deckA;
            }
        }
    };

    if (deckOne.length && deckTwo.length) {
        if (deckOneTopCard.number === deckTwoTopCard.number) {
            return (
                <div class="card">
                    <button onClick={() => {
                        returnWinner(deckOne, deckTwo);
                    }}>next card</button>
                    <h2>WAR</h2>
                    <h3>Player 1: {deckOne.length}</h3>
                    <WarCards deck={deckOne} topCard={deckOneTopCard} />
                    <h3>Player 2: {deckTwo.length}</h3>
                    <WarCards deck={deckTwo} topCard={deckTwoTopCard} />
                </div>
            );
        };
        if (deckOneTopCard.number !== deckTwoTopCard.number) {
            return (
                <div>
                    <button onClick={() => {
                        returnWinner(deckOne, deckTwo);
                    }}>Play</button>
                    <h3>Player 1: {deckOne.length}</h3>
                    <Card number={deckOneTopCard.number} suit={deckOneTopCard.suit} className="card" />
                    <h3>Player 2: {deckTwo.length}</h3>
                    <Card number={deckTwoTopCard.number} suit={deckTwoTopCard.suit} className="card" />
                </div>
            )
        } 
    };
    if ( !deckOne.length || !deckTwo.length ) {
        if (deckOne.length) {
            return (
                <div>
                    <h2>Player 1 wins!</h2>
                    <a href="#" onclick="window.location.reload(true);">play again</a>
                </div>
            )
        }
        if (deckTwo.length) {
            return (
                // Make winner page to render?
                <div>
                    <h2>Player 2 wins!</h2>
                    <a href="#" onClick="window.location.reload(true);">play again</a>
                </div>
            )

        }
        
    }
}