import './App.css';
import {useState} from 'react';

import learn_UseState from './learn-F8/useState.js'
import learn_UseEffect from './learn-F8/useEffect.js'
import Learn_UseLayoutEffect from './learn-F8/useLayoutEffect.js'
import Learn_UseRef from './learn-F8/useRef.js'
import Learn_UseCallback from './learn-F8/useCallback.js'
import Learn_UseMemo from './learn-F8/useMemo.js'
import Learn_UseReducer from './learn-F8/useReducer.js'

import Learn_Memo from './learn-F8/memo.js'

// for useEffect - 38
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson_${id}`, {
        detail: `Nội dung comment của lesson ${id}`
      })
    )
  }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);
// ------------

function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsShow(!isShow)}
      >
        Toggle    
      </button>

      {
        isShow &&
        <Learn_UseLayoutEffect/>
      }
    </div>
  );
}

// // useState
// export default learn_UseState;

// // useEffect
// export default learn_UseEffect;

// // useLayoutEffect
// export default (
//  <div>
//     <learn_UseLayoutEffect/>
//  </div>
// );
// export default App;

// // useRefs
// export default Learn_UseRef;

// // useCallback
// export default Learn_UseCallback;

// // useMemo
// export default Learn_UseMemo;

// // useReducer
export default Learn_UseReducer;

// // memo
// export default Learn_Memo;
