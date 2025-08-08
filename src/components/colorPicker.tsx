import { useState } from "react";

export default function ColorPicker(){

    const [color, setColor] = useState<string>("#ffffff");
    const colorChange = (event: React.ChangeEvent<HTMLInputElement>) => setColor(event.target.value);

    return(
        <div className="ColorPicker-container">
            <h1>Color Picker</h1>
            <div className="color-box" style={{backgroundColor: color}}>
                <p>{color}</p>
            </div>
            <input type="color" onChange={colorChange}/>
        </div>
    );
}