import {useState} from "react";

export default function Counter() {

    const [counter, setCounter] = useState<number>(0);
    const [changingValue, setChangingValue] = useState<number>(1);
    const [warning, setWarning] = useState<string>("");

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChangingValue(Number(event.target.value));
    }

    const increment = () => {
        setCounter(v => v + changingValue);
        setWarning("");
    }

    const reset = () => {
        setCounter(0);
        setWarning("");
        setChangingValue(1);
    }

    const decrement = () => {
        if(counter - changingValue < 0) {
            setWarning("Counter cannot go below 0");
        } else {
            setCounter(c => c - changingValue);
            setWarning("");
        }
    }

    return(
        <div className="counter-container">
            <h1>{counter}</h1>
            <input type="number" min="1" value={changingValue} onChange={changeValue}/>
            <p>{warning}</p>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={reset}>Reset</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
}