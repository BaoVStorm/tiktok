import {useMemo, useState} from 'react';
import {useRef} from 'react';

// giúp tránh thực hiện lại logic nào đó ko cần thiết

function Content() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [products, setProducts] = useState([]);

    const nameRef = useRef();

    const handleSubmit = () => {
        setProducts(prev => [...prev, {
            name,
            price: +price
        }])

        setName('');
        setPrice(0);

        nameRef.current.focus();
    };

    const total = useMemo(() => {
        const res = products.reduce((res, product) => {
            console.log("Tính toán lại...");

            return (res + product.price);
        }, 0)


        return res
    }, [products])

    return (
        <div style={{ padding: 20}}>
            <input
                value={name}
                ref={nameRef}
                placeholder='Enter name ...'
                onChange={(e) => setName(e.target.value)}
            />
            <br/>

            <input
                type='number'
                value={price}
                placeholder='Enter price ...'
                onChange={(e) => setPrice(e.target.value)}
            />
            <br/>

            <button
                onClick={handleSubmit}
            >
                Add
            </button>

            <h3>Total: {total}</h3> 

            <ul>
                {
                    products.map((product, index) => {
                        return (
                            <li key={index}>
                                name {product.name}, price: {product.price}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

}

export default Content;
