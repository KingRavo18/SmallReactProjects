import {useState} from "react";

export default function Counter() {

    const [counter, setCounter] = useState<number>(0);
    const [changingValue, setChangingValue] = useState<number>(1);

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChangingValue(Number(event.target.value));
    }

    const increment = () => setCounter(v => v + 1);
    const reset = () => setCounter(0);
    const decrement = () => counter > 0 ? setCounter(c => c - 1) : setCounter(0);

    return(
        <div className="counter-container">
            <p>{counter}</p>
            <input type="number" min="1" onChange={changeValue}/>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
}