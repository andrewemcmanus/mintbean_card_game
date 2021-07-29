import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Deck from './scripts/decks';
// import { suits, numbers } from './scripts/decks';

// create a script that produces randomized decks for both players
// eventListener/onClick function
function App() {
  const deck = new Deck();
  deck.shuffle();
  
  let initialCard = deck.cards[0];
  return (
    <div className="App">
        <Card number={initialCard.number} suit={initialCard.suit} />
    </div>
  );
}

export default App;
