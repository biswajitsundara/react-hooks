import { useReducer } from "react";
import { counterReducer } from "./CounterReducer";

const Counter = () => {

    const [count, dispatch] = useReducer(counterReducer, 0)
    return ( <>
    <h2>Count: {count}</h2>
    <button onClick={()=>dispatch({type: 'INCREMENT'})}>+</button>
    <button onClick={()=>dispatch({type: 'DECREMENT'})}>-</button>
    </> );
}
 
export default Counter;