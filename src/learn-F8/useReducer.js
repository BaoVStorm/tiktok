import { useReducer, useState, useRef } from 'react';

// useReducer và useState điều tương tự nhau
// nếu useState dùng được thì useReducer cũng dùng được và ngược lại

// useState
    // Sử dụng cho những trạng thái đơn giản
// useReducer
    // Phù hợp hơn trong những tình huống phức tạp hơn
    // VD: Array hay object nhiều lớp

// --------------- các bước làm
// useState
// 1. Init state: 0
// 2. Actions: Up (state + 1) | Down (state - 1)

// useReducer
// 1. Init state: 0
// 2. Actions: Up (state + 1) | Down (state - 1)
// 3. Reducer
// 4. Dispatch

function App() {
    const [count, setCount] = useState(0);

    return (
        <div style={{ padding: '0 20px' }}>
            <h1>{count}</h1>
            
            <button
                onClick={() => setCount(count - 1)}
            >
                Down
            </button>
            <button
                onClick={() => setCount(count + 1)}
            >
                Up
            </button>
        </div>
    )
}

// --------------------------- useReducer
// Init State
const initState = 0;

// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// Reducer
const reducer = (state, action) => {
    console.log('reducer running...')
    
    switch(action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid action')
    }
} 

function App2() {
    const [count, dispatchCount] = useReducer(reducer, initState);

    return (
        <div style={{ padding: '0 20px' }}>
            <h1>{count}</h1>
            
            <button
                onClick={() => dispatchCount(DOWN_ACTION)}
            >
                Down
            </button>
            <button
                onClick={() => dispatchCount(UP_ACTION)}
            >
                Up
            </button>
        </div>
    )   
}

// --------------------------- TodoApp_useReducer

const ADD_TODO = 'add';
const REMOVE_TODO = 'remove';

const todoReducer = (state, {action, value, index}) => {
    switch(action) {
        case ADD_TODO:
            return [...state, value];
        case REMOVE_TODO:
            return state.filter((v, i) => i != index);
        default:
            throw new Error('invalid action');
    }
}

function TodoApp() {
    const [tasks, dispatchTask] = useReducer(todoReducer, []);
    const [taskName, setTaskName] = useState('');

    const inputRef = useRef();

    const handleAdd = () => {
        dispatchTask({action: ADD_TODO, value: taskName})
        inputRef.current.focus();
        setTaskName('');
    }

    const handleRemove = (index) => {
        dispatchTask({action: REMOVE_TODO, index: index})
    }

    return (
        <div style={{ padding: '0 20px' }}>
            <h1>Todo</h1>
            
            <input
                ref={inputRef}
                value={taskName}
                onChange={(e)=>setTaskName(e.target.value)}
                placeholder='Enter todo...'
            />  

            <button
                onClick={handleAdd}
            >
                Add
            </button>
            
            <ul>
                {
                    tasks.map((task, index) => (
                        <li 
                            key={index}
                            onClick={()=>handleRemove(index)}
                        >
                            {task} &times;
                        </li>
                    ))
                }
            </ul>
        </div>
    )   
}


// export default App;
// export default App2;
export default TodoApp;
