import { LOGO_URL } from "./utils/constants";

export const Header = () => {
    return (
        <div className="header">

        <div className="logo-container">
            <img className="Logo"
            src= {LOGO_URL}
            alt="image"
            />
        </div>

        <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
        </div>

        </div>

        
    );
};