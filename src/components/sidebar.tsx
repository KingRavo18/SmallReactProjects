import { Link } from "react-router-dom";

export default function Sidebar() {
    return(
        <nav className="sidebar">
            <p>Apps</p>
            <hr/>
            <ul>
                <li><Link to="/" className="nav-link">Counter</Link></li>
                <li><Link to="/components/randomNumberGen" className="nav-link">RNG</Link></li>
                <li><Link to="/components/colorPicker" className="nav-link">Color Picker</Link></li>
            </ul>
        </nav>
    );
}