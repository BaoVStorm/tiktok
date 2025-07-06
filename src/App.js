import './App.css';
import {useState} from 'react';

import learn_UseState from './learn-F8/useState.js'
import learn_UseEffect from './learn-F8/useEffect.js'
import Learn_UseLayoutEffect from './learn-F8/useLayoutEffect.js'
import Learn_UseRef from './learn-F8/useRef.js'
import Learn_UseCallback from './learn-F8/useCallback.js'
import Learn_UseMemo from './learn-F8/useMemo.js'
import Learn_UseReducer from './learn-F8/useReducer.js'
import Learn_UseContext from './learn-F8/useContext.js'
  import {ThemeProvider } from './learn-F8/useContext/ThemeContext.js'; 

import Learn_UseContext_Reducer from './learn-F8/useContext_useReducer.js'
  import  {Provider_UseContext_Reducer} from './learn-F8/useContext_useReducer/index.js'

import Learn_UseImperativeHandle from './learn-F8/useImperativeHandle.js'

// Memo
import Learn_Memo from './learn-F8/memo.js'

// Css
import Learn_CSS from './learn-F8/LearnCSS/CSS.js';
import Learn_CSSModule from './learn-F8/LearnCSS/CssModule.js';
import Learn_CSSMultiClass from './learn-F8/LearnCSS/multiClass.js';

// reactRouter Dom
import Learn_ReactRouterDom from './learn-F8/reactRouterDom.js'

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
// export default Learn_UseReducer;

// // useContext
// const out = () => {
//   return (
//     <ThemeProvider>
//       <Learn_UseContext/>
//     </ThemeProvider>
//   )
// }
// export default out;

// // useContext_useReducer
// const out2 = () => {
//   return (
//     <Provider_UseContext_Reducer>
//       <Learn_UseContext_Reducer/>
//     </Provider_UseContext_Reducer>
//   )
// }
// export default out2;

// // useImperativeHandle
// export default Learn_UseImperativeHandle;

// // --------------- memo
// export default Learn_Memo;

// // --------------- CSS
// export default Learn_CSS;

// // CSS Module
// export default Learn_CSSModule;

// // CSS MultiClass
// const out3 = () => {
//   return (
//     <>
//       <Learn_CSSMultiClass primary/>
//       <Learn_CSSMultiClass danger/>
//       <Learn_CSSMultiClass normal/>
//     </>
//   )
// }
// export default out3;

// // React Router Dom
export default Learn_ReactRouterDom;