import {useRef, useEffect } from 'react'
import Video from '../videos/Videos'

// useImperativeHandle được dùng để đóng gói đối tượng, không lấy hết tất cả đối tượng mục đích để bảo mật
// dùng khi muốn ref từ 1 đối tượng mà đối tượng đó là con 

// dùng với useRef
// chú ý forwardRef

function App() {
    const videoRef = useRef();

    useEffect(() => {
        console.log(videoRef.current);
    })

    const handlePlay = () => {
        videoRef.current.play();
    }

    const handleStop = () => {
        videoRef.current.pause();
    }

    return (
        <div>
            <h1>I'm VStorm</h1>
            <Video ref={videoRef}/>

            <button onClick={handlePlay}> Play </button>
            <button onClick={handleStop}>Pause</button>
        </div>
    )
}

export default App;