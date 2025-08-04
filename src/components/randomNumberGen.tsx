import { useState } from "react";

export default function RandomNumberGenerator() {

    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [randomNumber, setRandomNumber] = useState<number>(0);
    const [warning, setWarning] = useState<string>("");

    const getMinValue = (event: React.ChangeEvent<HTMLInputElement>) => setMinValue(Number(event.target.value));
    const getMaxValue = (event: React.ChangeEvent<HTMLInputElement>) => setMaxValue(Number(event.target.value));   

    const generateRN = () => {
        if(minValue < maxValue){
            setRandomNumber(Math.round(Math.random() * (maxValue - minValue)) + minValue);
            setWarning("");
        }else{
            setWarning("Minimum value cannot exceed the maximum!");
            setMinValue(0);
            setMaxValue(0);
        }
    }

    return(
        <div className="rng-container">
            <h1>Random Number Generator</h1>
            <h2>{randomNumber}</h2>
            <label>Minimum:</label>
            <input type="number" min="0" onChange={getMinValue} value={minValue}/>
            <label>Maxiumum:</label>
            <input type="number" min="0" onChange={getMaxValue} value={maxValue}/>
            <p className="warning-message">{warning}</p>
            <button onClick={generateRN}>Generate</button>
        </div>
    );
}
//Add a reset button.

//Allow choosing decimal or whole number mode.

//Store a history of generated numbers.