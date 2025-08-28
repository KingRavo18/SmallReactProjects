import {useEffect, useState} from "react";

export default function Counter() {

    const counterValue = () => Number(localStorage.getItem('counterValue')) || 0,
          valueByWhichToChange = () => Number(localStorage.getItem('valueByWhichToChange')) || 1,
          [counter, setCounter] = useState<number>(counterValue()),
          [changingValue, setChangingValue] = useState<number>(valueByWhichToChange()),
          [warning, setWarning] = useState<string>("");

    useEffect(() => localStorage.setItem('counterValue', counter.toString()), [counter]);
    useEffect(() => localStorage.setItem('valueByWhichToChange', changingValue.toString()), [changingValue]);

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => setChangingValue(Number(event.target.value));

    const increment = () => {
        setCounter(c => c + changingValue);
        setWarning(""); 
    }

    const reset = () => {
        setCounter(0);
        setWarning("");
        setChangingValue(1);
    }

    const decrement = () => {
        if(counter - changingValue < 0) {
            setWarning("Warning: Counter cannot go below 0");
        } else {
            setCounter(c => c - changingValue);
            setWarning("");
        }
    }

    return(
        <div className="counter-container">
            <h1>{counter}</h1>
            <input type="number" min="1" value={changingValue} onChange={changeValue}/>
            <p className="warning-message">{warning}</p>
            <div className="button-container">
                <button className="increment-button" onClick={increment}>Increment</button>
                <button className="reset-button" onClick={reset}>Reset</button>
                <button className="decrement-button" onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
}

//Use useEffect to set up event listeners safely.

//Always clean up with removeEventListener.

//Scope your handler so React state updates still work properly.