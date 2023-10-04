import "./App.css";
import { useState } from "react";
import scoreArray from "./scoreArray";

function App() {
  const [score, setScore] = useState(0); // Counts Score
  const [currency, setCurrency] = useState(0); // Counts Currency
  const [upgradeCounter, setUpgradeCounter] = useState(1); // Reduce Score
  const [cost, setCost] = useState(10); // set the cost reduction

  const addScore = () => {
    scoreArray[upgradeCounter] && scoreArray[upgradeCounter](setScore, score);
  };
  const addCurrency = () => {
    scoreArray[upgradeCounter] &&
      scoreArray[upgradeCounter](setCurrency, currency);
  };

  const removeScore = () => {
    setScore(score - 1);
  };

  const upgrade = () => {
    setUpgradeCounter(upgradeCounter + 1);
    setCurrency(currency - cost);
    costReduce();
  };

  const costReduce = () => {
    setCost(cost + 10);
  };
  return (
    <div className="App">
      <div className="Game">
        <p>Next upgrade is at {cost}KD</p>

        <h3>Currency: {currency}KD</h3>
        <h1>{score}</h1>

        <button
          onClick={() => {
            addCurrency();
            addScore();
          }}
        >
          +
        </button>
        <button onClick={removeScore}>-</button>
        {currency >= cost && <button onClick={upgrade}>Upgrade</button>}
      </div>
    </div>
  );
}
export default App;
