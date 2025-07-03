import {useCallback, useState} from 'react';
import Temp from './temp/temp.js'

// giúp tránh tạo ra những hàm mới ko cần thiết

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()
    // - Refenrence types
    // - React memo()


function Content() {
    const [count, setCount] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])

    return (
        <div>
            <Temp onIncrease={handleIncrease}/>
            <h1>{count}</h1>
        </div>
    )
}

export default Content;
