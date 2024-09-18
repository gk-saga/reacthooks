import React, { useState, useMemo } from 'react';

function ExpensiveCalculation(num) {
    console.log('Calculating...');
    return num * 2;
}

function HookUseMemo() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const doubled = useMemo(() => ExpensiveCalculation(count), [count]);

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <p>Count: {count}</p>
            <p>Doubled: {doubled}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default HookUseMemo;
