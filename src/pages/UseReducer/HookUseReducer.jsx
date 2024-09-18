import { useReducer } from "react"
import Reducer from "./reducer"
const initialState = { count: 0 }

export const HookUseReducer = () => {

    const [state, dispatch] = useReducer(Reducer, initialState)
    return (
        <>
            <p>The Count value is {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </>
    )
}