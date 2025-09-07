import { useState } from "react";

export default function TipCalculator() {

    const [billAmount, setBillAmount] = useState<number>(0);
    const [tipPercentage, setTipPercentage] = useState<number>(0);
    const [total, setTotal] = useState<string>(new Intl.NumberFormat("lv-LV", { style: "currency", currency: "EUR"}).format(0));
    const [warning, setWarning] = useState<string>("");

    const retrieveBillAmount = (event: React.ChangeEvent<HTMLInputElement>) => setBillAmount(Number(event.target.value));
    const retrieveTipPercentage = (event: React.ChangeEvent<HTMLInputElement>) => setTipPercentage(Number(event.target.value));

    function calculate(){
        if(billAmount < 0 || isNaN(billAmount)){
            return setWarning("Please enter a valid bill amount.");
        }
        if(tipPercentage < 0 || isNaN(tipPercentage)){
            return setWarning("Please enter a valid tip amount.");
        }
        if(billAmount === 0 && tipPercentage === 0){
            return setWarning("Please fill out the input fields.");
        }

        setTotal(new Intl.NumberFormat("lv-LV", { style: "currency", currency: "EUR"}).format(billAmount + billAmount * tipPercentage / 100));
    }

    return(
        <div className="tip-calculator-container">
            <h1>Tip Calculator</h1>
            <p>Enter the bill amount and tip percentage to calculate the total.</p>
            <label htmlFor="CashAmount">Bill amount:</label>
            <input type="number" min="0" id="CashAmount" value={billAmount} onChange={retrieveBillAmount}/>
            <label htmlFor="TipPercentage">Tip %:</label>
            <input type="number" min="0" id="TipPercentage" value={tipPercentage} onChange={retrieveTipPercentage}/>
            <button onClick={calculate}>Calculate</button>
            <p className="warning-message">{warning}</p>
            <p>Total: {total}</p>
        </div>
    );
}