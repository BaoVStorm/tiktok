import {memo} from 'react'
// for memo


function App({count}) {
    console.log("Re-render Temp")

    return (
        <div>
            <h1>Hello, I'm VStorm | {count}</h1>
        </div>
    )
}


function App2({onIncrease}) {
    console.log("Re-render Temp")

    return (
        <div>
            <h1>Hello, I'm VStorm</h1>
        
            <button 
                onClick={onIncrease}
            >
                Click me!
            </button>
        </div>
    )
}


export default memo(App2);