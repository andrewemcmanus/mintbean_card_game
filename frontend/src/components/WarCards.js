import Card from "./Card"
import { CardStyle } from "./Card"
// to do: different styles for War Cards?

export default function WarCards({ deck, topCard }) {
    return (
        <div>
            <CardStyle>
                <Card number={deck[1].number} suit={deck[1].suit} />
                <Card number={topCard.number} suit={topCard.suit} />
                <Card number={deck[2].number} suit={deck[2].suit} />
            </CardStyle>
        </div>
    )
}