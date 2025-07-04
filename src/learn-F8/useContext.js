import './Learn.css'
import Context from './useContext/Context.js';
import { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './useContext/ThemeContext.js';

// Đơn giản hoá truyền dữ liệu từ cha xuống con

// Context
// CompA => CompB => CompC

// 1. Create context
// 2. Provider
// 3. Consumer

function App() {
    const themeContext = useContext(ThemeContext);

    return (
        <div style={{ padding: 20 }}>
            <button onClick={themeContext.toggleTheme}>Toggle theme</button>
            <Context/>
        </div>
    )
}

export default App;
