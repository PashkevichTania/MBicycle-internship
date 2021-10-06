import React from 'react';
import {NavLink} from 'react-router-dom';
import {APP_PATH} from 'Constants';
import styles from 'Components/Header/header.module.scss'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <NavLink
                            exact
                            to={APP_PATH.TRACKER}
                            activeStyle={{
                                fontWeight: "bold",
                                textDecoration: "underline",
                            }}
                        >
                            Tracker
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={APP_PATH.PROJECTS_LIST}
                            activeStyle={{
                                fontWeight: "bold",
                                textDecoration: "underline",
                            }}
                        >
                            Notes
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;