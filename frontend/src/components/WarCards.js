import Card from "./Card"
import { CardStyle } from "./Card"

export default function WarCards({ deck, topCard }) {
    return (
        <div>
            <CardStyle>
                <Card number={topCard.number} suit={topCard.suit} score={deck.length}/>
                <Card number={deck[1].number} suit={deck[1].suit} />
                <Card number={deck[2].number} suit={deck[2].suit} />
            </CardStyle>
        </div>
    )
}