import { useState } from 'react';
import './App.css';
import Clock from './Clock'

function App() {
  const [showClock, setShowClock] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setShowClock(!showClock)}>{showClock ? "Hide" : "Show"} clock</button>
      {showClock && <Clock />}
    </div>
  );
}

export default App;
