import React, {useState} from 'react';
import './Counter.module.scss'
import cls from './Counter.module.scss'
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div className={cls.rootID}>
            <h1 className={cls.red}>{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;
