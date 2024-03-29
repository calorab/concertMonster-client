import React from 'react';
import classes from './SideDrawer.module.css';

import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../Containers/hoc/Aux/Aux';

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.open]
    }
  
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.close}/>
            <div className={attachedClasses.join(' ')} onClick={props.close}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
            </div>
        </Aux>
    );
};

export default sideDrawer;
