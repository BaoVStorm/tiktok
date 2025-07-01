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

// export default Content;
export default Content2;
