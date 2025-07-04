import {useRef, useEffect, useState} from 'react';

// Lưu các giá trị qua 1 tham chiếu bên ngoài
// kết quả trả về của useRef(<initValue>) là 1 object
    // value là obj.current 
// function component
    // gán 1 component vào ref bằng tag ref={<valueRef>}

function Content() {
    const [count, setCount] = useState(60);

    let timeId = useRef();

    const handleStart = () => {
        timeId.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000);

        console.log("SET - timeId.current", timeId.current);
    }

    const handleStop = () => {
        clearInterval(timeId.current);        

        console.log("REMOVE - timeId.current", timeId.current);
    }

    return (
        <div>
            <h1>{count}</h1>

            <button 
                onClick={handleStart}
            >
                Start
            </button>
            <button 
                onClick={handleStop}
            >
                Stop
            </button>
        </div>
    )
}

// ------------------ Lấy giá trị trươc đó (bao gồm cả ý đầu)
function PrevValue() {
    const [count, setCount] = useState(60);

    let timeId = useRef();  

    let prevValue = useRef();

    useEffect(() => {
        prevValue.current = count;
    }, [count])

    const handleStart = () => {
        timeId.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000);

        // console.log("SET - timeId.current", timeId.current);
    }

    const handleStop = () => {
        clearInterval(timeId.current);        

        // console.log("REMOVE - timeId.current", timeId.current);
    }

    console.log(`prev: ${prevValue.current}, curr: ${count}`)

    return (
        <div>
            <h1>{count}</h1>

            <button 
                onClick={handleStart}
            >
                Start
            </button>
            <button 
                onClick={handleStop}
            >
                Stop
            </button>
        </div>
    )
}

// ------------------ Lấy giá trị trươc đó (bao gồm cả ý đầu)
function SetRef() {
    const [count, setCount] = useState(60);

    const timeId = useRef();
    const h1Ref = useRef();

    useEffect(()=>{
        console.log(h1Ref.current);
        
        console.log(h1Ref.current.getBoundingClientRect());
    });

    const handleStart = () => {
        timeId.current = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000);
    }

    const handleStop = () => {
        clearInterval(timeId.current);        
    }

    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>

            <button 
                onClick={handleStart}
            >
                Start
            </button>
            <button 
                onClick={handleStop}
            >
                Stop
            </button>
        </div>
    )
}

// export default Content;
// export default PrevValue;
export default SetRef;
