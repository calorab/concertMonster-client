import React from 'react';
import classes from './NavigationItems.module.css';

import NavItem from './NavItem/Navitem';

const navigationItems = (props) => (
// I want to make the navItems be different based on if the user is logged in or not
    <ul>
        <NavItem
            className={classes.NavigationItems}>
            GET STARTED
        </NavItem>
    </ul>
);

export default navigationItems;