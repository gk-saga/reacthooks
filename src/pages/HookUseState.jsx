import { useState } from "react";

export const HookUseState = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>
                Total Count is {count}
            </p>
            <button style={{ marginBottom: '30px' }} onClick={() => setCount(count + 1)}>Increase the count </button>
            <br />
            <button onClick={() => setCount(count - 1)} disabled={count <= 0 ? true : false}> Decrease the count</button>
        </>
    )
}