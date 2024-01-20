
import { useState } from 'react';
import './App.css';
import Scene from './components/Scene';

function App() {

  const [start, setStart] = useState(false);
  const handleClick = () => {
    setStart(!start);
  }
  return (
    <div className="App">
      <button onClick={handleClick}>hi</button>
      <Scene start={start} />
    </div>
  );
}

export default App;
