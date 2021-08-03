import Card from "./Card"
import styled from "styled-components";
// import { CardStyle } from "./Card"
// to do: different styles for War Cards?

export const WarCardStyle = styled.div`
    .card {
        display: flex-grow;
        width: 3.3em;
        height: 4.6em;
        border: 1px solid #666;
        border-radius: .3em;
        -moz-border-radius: .3em;
        -webkit-border-radius: .3em;
        -khtml-border-radius: .3em;
        padding: .25em;
        margin: 0 .5em .5em 0;
        text-align: center;
        font-size: 2em; /* @change: adjust this value to make bigger or smaller cards */
        font-weight: normal;
        font-family: Arial, sans-serif;
        position: relative;
        background-color: #fff;
        -moz-box-shadow: .2em .2em .5em #333;
        -webkit-box-shadow: .2em .2em .5em #333;
        box-shadow: .2em .2em .5em #333;
    }
`;

export default function WarCards({ deck, topCard }) {
    return (
        <div class="card">
            <WarCardStyle>
                <Card number={deck[1].number} suit={deck[1].suit} />
                <Card number={topCard.number} suit={topCard.suit} />
                <Card number={deck[2].number} suit={deck[2].suit} />
            </WarCardStyle>
        </div>
    )
}