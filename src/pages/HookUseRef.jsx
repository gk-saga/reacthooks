import { useRef } from "react"

export const HookUseRef = () => {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    }
    return (
        <>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Foucs</button>
        </>
    )
}