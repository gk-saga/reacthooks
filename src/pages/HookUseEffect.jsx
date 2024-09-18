import { useEffect, useState } from "react"

export const HookUseEffect = () => {
    const [seconds, setSeconds] = useState(0)
    const [dummy, setDummy] = useState(0);
    useEffect(() => {
        const intervel = setInterval(() => {
            setSeconds(seconds + 1)
        }, 10)
        return () => clearInterval(intervel)
    }, [dummy])
    return (
        <>Seconds {seconds}
            <button onClick={() => setDummy(dummy + 1)}>change value </button>
        </>
    )
}