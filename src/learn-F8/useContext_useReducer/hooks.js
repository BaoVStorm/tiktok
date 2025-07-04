import { useContext } from 'react';
import Context from './Context.js'

function useStore() {
    const [state, dispatch] = useContext(Context);

    return [state, dispatch];
}

export default useStore;