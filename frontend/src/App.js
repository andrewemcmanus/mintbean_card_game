import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Deck from './scripts/decks';

// create a script that produces randomized decks for both players
// eventListener/onClick function
// Game component
function advance(i) {
  i = i+1;
  return i;
}

function App() {
  const deckOne = new Deck();
  const deckTwo = new Deck();
  deckOne.shuffle();
  deckTwo.shuffle();
  let i = 0;
  return (
    <div className="App">
      <button onClick={() => advance(i)}>next card</button>
        <Card number={deckOne.cards[i].number} suit={deckOne.cards[i].suit} />
        <Card number={deckTwo.cards[i].number} suit={deckTwo.cards[i].suit} />
    </div>
  );
}

export default App;
