import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Deck from './scripts/decks';
// import { suits, numbers } from './scripts/decks';

// create a script that produces randomized decks for both players
// eventListener/onClick function
function App() {
  const deckOne = new Deck();
  const deckTwo = new Deck()
  deckOne.shuffle();
  deckTwo.shuffle();
  
  let firstCard = deckOne.cards[0];
  let startCard = deckTwo.cards[0];
  return (
    <div className="App">
        <Card number={firstCard.number} suit={firstCard.suit} />
        <Card number={startCard.number} suit={startCard.suit} />
    </div>
  );
}

export default App;
