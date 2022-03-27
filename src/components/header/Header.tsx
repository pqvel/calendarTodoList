import { FC } from "react";
import { Link } from "react-router-dom";
import './header.scss';

const Header: FC = () => {

    return (
        <header className="header">
            <div className="container header__container">
                <Link to="/" className="header__logo">Calendar</Link>  
            </div>        
        </header>
    )
}

export default Header