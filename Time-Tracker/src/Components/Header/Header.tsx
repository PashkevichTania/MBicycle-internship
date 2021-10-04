import React from 'react';
import { NavLink } from 'react-router-dom';
import {APP_PATH} from "../../Constants";

const Header = () => {
    return (
        <header className={"header"}>
            <nav>
                <ul>
                    <li><NavLink to={APP_PATH.TRACKER} >Tracker</NavLink></li>
                    <li><NavLink to={APP_PATH.LIST} >Notes</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;