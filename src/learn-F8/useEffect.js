import { useEffect, useState } from "react";
// dùng khi muốn thực hiện "Side effects" (khi có tác động -> dữ liệu chương trình thay đổi)



// Event: Add / remove event listener
// Observer pattern: Subscribe / unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unmounted
// ====
// Call api

/* useEffect dùng để:

1. Update DOM
    - F8 blog title
2. Call API
3. Listen DOM events
    - Scroll
    - Resize
4. Cleanup
    - Remove listener / Unsubcribe
    - Clear timer
    */
   
// 1. useEffect(callback)
    // - gọi callback mỗi khi component re-render
    // - gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
    // - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])
    // - sẽ được gọi lại mỗi khi deps thay đổi

// -----------------
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup funciton luôn được gọi trước khi component ummounted
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần component mounted)

// ======================== ý 1: useEffect(callback)
function Content() {
    const [title, setTitle] = useState('');

    useEffect(()=> {
        document.title = title;
    });

    // document.title = title;


    return (
        <div>
            Hello world
            <input
                value={title}
                onChange={e=>setTitle(e.target.value)}    
            />
        </div>
    )
}

// ======================== ý 2: useEffect(callback, [])
function Content2() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        // chỉ gọi fetch 1 lần

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, []);

    return (
        <div>
            Hello world
            <input
                value={title}
                onChange={e=>setTitle(e.target.value)}    
            />
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

// ======================== ý 3: useEffect(callback, [deps])
const ss = ['posts', 'comments', 'albums'];

function Content3() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState(ss[1]);

    useEffect(()=> {
        // chỉ gọi fetch 1 lần

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type]);

    return (
        <div>
            Hello world
            {
                ss.map(s=>(
                    <button
                        style={s === type ? {
                                backgroundColor: '#333',
                                color: '#fff'
                            } : {}}
                        onClick={()=>setType(s)}
                    >
                    {s}
                    </button>
                ))
            }
            <input
                value={title}
                onChange={e=>setTitle(e.target.value)}    
            />
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title || post.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

// ======================== Scroll-page Show button (Cleanup function) (bao gồm ý 3)
function ScrollPage_Button() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState(ss[1]);

    const [isShowTopButton, setIsShowTopButton] = useState(false);

    useEffect(()=> {
        // chỉ gọi fetch 1 lần

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type]);

    // event show button
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            setIsShowTopButton(window.scrollY >= 200);
        }

        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            console.log("Unmounting...")
            // cần dùng khi xoá những sự kiện hoặc những thứ làm rò rĩ dữ liệu
            // vd: window.removeEventListener('scroll', handleScroll)
        }
    });

    return (
        <div>
            Hello world
            {
                ss.map((s, index)=>(
                    <button
                        key={index}

                        style={s === type ? {
                                backgroundColor: '#333',
                                color: '#fff'
                            } : {}}
                        onClick={()=>setType(s)}
                    >
                    {s}
                    </button>
                ))
            }
            <input
                value={title}
                onChange={e=>setTitle(e.target.value)}    
            />
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title || post.name}</li>
                    ))
                }
            </ul>

            { 
                isShowTopButton && 
                <button
                    style={{
                        position:'fixed',
                        right: 0,
                        bottom: 0,
                        margin: 20
                    }}
                >
                    Scroll Top
                </button>
            }
        </div>
    )
}

// ======================== Resize - Cleanup function
function Resize() {
    const [width, setWidth] = useState(window.innerWidth);
    const [isShow, setIsShow] = useState(false);

    const handleUpdateWidth = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleUpdateWidth);

        return () => {
            window.removeEventListener('resize', handleUpdateWidth);
        };
    }, []);

    const handleToggle = () => {
        setIsShow(!isShow)
    }

    return (
        <div>
            <button
                onClick={handleToggle}
            >
                toggle
            </button>

            <h1>
                {isShow && width}
            </h1>
            
        </div>
    )
}

// ======================== TimeCountDown - Cleanup function

function TimeCountDown() {
    const [time, setTime] = useState(60);

    useEffect(() => {
        const timeInterval = setInterval(() =>{
            setTime(prev => prev - 1);
        }, 1000);

        return () => {
            clearInterval(timeInterval);
        }

    }, []);

    return (
        <div>
            <h1>
                {time}
            </h1>
        </div>
    )
}

// ======================== Avatar

function Avatar() {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => {
            // console.log("remove object");
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);

    const handleAvatar = (e) => {
        let file = e.target.files[0];
        
        // console.log("set object");

        file.preview = URL.createObjectURL(file);

        setAvatar(file);
    };

    return (
        <div>
            <input
                type="file"
                onChange={handleAvatar}
            />
             
            {avatar && 
                <img
                    src={avatar.preview}
                    alt=""
                    width='50%'
                />
            }
        </div>
    )
}

// export default Content;
// export default Content2;
// export default Content3;
// export default ScrollPage_Button;
// export default TimeCountDown;
export default Avatar;
