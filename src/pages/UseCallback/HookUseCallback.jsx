import React, { useState, useCallback } from "react";
import Child from "./chilld";


function HookUseCallback() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <Child handleClick={increment} />
        </div>
    );
}

export default HookUseCallback;  // Ensure this is exported correctly as default
