import { useContext } from "react";
import { ThemeContext } from './ThemeContext.js';

function App() {
    const themeContext = useContext(ThemeContext);

    return (
        <p className={themeContext.theme}>
            Context provides a way to pass data through the component tree without having to pass props down manually at every level.
        </p>
    )
}

export default App;