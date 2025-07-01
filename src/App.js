import './App.css';
import {useState} from 'react';

import learn_UseState from './learn-F8/useState.js'

function App() {
  const [counter, setCounter] = useState(1);

  const handleCounter = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1 style={{ padding:20, backgroundColor: 'red' }}> 
        {counter}
      </h1>  
      
      <button onClick={handleCounter}>Alo</button>
    </div>
  );
}

// // useState
// export default learn_UseState;

export default App;

