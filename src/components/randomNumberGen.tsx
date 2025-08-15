import { useState } from "react";

export default function RandomNumberGenerator() {

    const [minValue, setMinValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(0);
    const [randomNumber, setRandomNumber] = useState<number>(0);
    const [warning, setWarning] = useState<string>("");
    const [numberType, setNumberType] = useState<string>("Whole");
    const [numberHistory, setNumberHistory] = useState<Array<number>>([]);

    const getNumberType = (event: React.ChangeEvent<HTMLInputElement>) => setNumberType(event.target.value);
    const getMinValue = (event: React.ChangeEvent<HTMLInputElement>) => setMinValue(Number(event.target.value));
    const getMaxValue = (event: React.ChangeEvent<HTMLInputElement>) => setMaxValue(Number(event.target.value));   

    const generateRN = () => {
        if(minValue < maxValue){
            const newNumber = Number(numberType === "Whole" ? 
                                   Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue : 
                                  (Math.random() * (maxValue - minValue) + minValue).toFixed(2));
            setRandomNumber(newNumber);
            setNumberHistory((n => [...n, newNumber].reverse()));
            setWarning("");
        }else{
            setWarning(minValue == maxValue ? "Both values cannot be the same!" : "Minimum value cannot exceed the maximum!");
            reset();
        }
    }

    const reset = () => {
        setMinValue(0);
        setMaxValue(0);
        setRandomNumber(0);
    }

    const clearHistory = () => setNumberHistory([]);
    
    return(
        <div className="rng-program-container">
            <div className="rng-container">
                <h1>Random Number Generator</h1>
                <h2>{randomNumber}</h2>
                <label>Minimum:</label>
                <input type="number" min="0" onChange={getMinValue} value={minValue}/>
                <label>Maxiumum:</label>
                <input type="number" min="0" onChange={getMaxValue} value={maxValue}/>
                <p className="warning-message">{warning}</p>
                <div>
                    <label>
                        <input type="radio" value="Whole" onChange={getNumberType} checked={numberType === "Whole"}/>
                        Whole Numbers
                    </label>
                    <br/>
                    <label>
                        <input type="radio" value="Decimal" onChange={getNumberType} checked={numberType === "Decimal"}/>
                        Decimal Numbers
                    </label>
                </div>
                <button onClick={reset}>Reset</button>
                <button onClick={generateRN}>Generate</button>
            </div>

            <div className="numberHistory-container">
                <h3>Number History</h3>
                <div className="numberHistory-list-container">
                    <ol reversed>
                        {numberHistory.map((rng, index) =>
                            <li key={index}>{rng}</li>
                        )}
                    </ol>
                </div>
                <button onClick={clearHistory}>Clear History</button>
            </div>
        </div>
    );
}
