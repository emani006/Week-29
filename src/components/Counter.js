import React, {useState, useEffect} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
        
    const handleClick = () => {
        setCount(count => count+1);
        console.log(count);
    }

    useEffect(() => { 
		return console.log(count);
    }) 
            // return <button onClick={() => setCount(count + 1)}>{count}</button>;
            return <button onClick={handleClick}>{count}</button>;

        }