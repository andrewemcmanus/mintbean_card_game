import styled from 'styled-components';

export const CardStyle = styled.div`
    display: grid;
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
    font-size: 1.2em; /* @change: adjust this value to make bigger or smaller cards */
    font-weight: normal;
    font-family: Arial, sans-serif;
    position: relative;
    background-color: #fff;
    -moz-box-shadow: .2em .2em .5em #333;
    -webkit-box-shadow: .2em .2em .5em #333;
    box-shadow: .2em .2em .5em #333;
    span {
        font-size: 28px;
        color: #7f8c9b;
        line-height: 150%;
    }
`;

export default function Card({ number, suit }) {
    return (
        <div>
            <CardStyle>
                <span>{number}</span>
                <span>{suit}</span>
            </CardStyle>
        </div>
    )
}