

export default function TipCalculator() {
    return(
        <div className="tip-calculator-container">
            <h1>Tip Calculator</h1>
            <p>Enter the bill amount and tip percentage to calculate the total.</p>
            <label htmlFor="CashAmount" >Bill amount:</label>
            <input type="number" id="CashAmount"></input>
            <label htmlFor="TipPercentage">%:</label>
            <input type="number" id="TipPercentage"></input>
            <button>Calculate</button>
            <p>Total: $</p>
        </div>
    );
}