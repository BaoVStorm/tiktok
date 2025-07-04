import useStore from "./useContext_useReducer/hooks";
import * as actions from "./useContext_useReducer/actions";

function App() {
    const [state, dispatch] = useStore();
    const {todos, todoInput } = state; 

    // console.log(state);

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput));
    }

    return (
        <div>
            <h1>Hello VStorm</h1>
            <input
                value={todoInput}
                placeholder="Enter todo..."
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button
                onClick={handleAdd}
            >Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}

export default App;