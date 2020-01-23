import React, {Component} from 'react';
import classes from './Layout.module.css';

import Toolbar from '../../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../../Components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        sideDrawerOpen: false,
        isAuthenticated: false
    }

    componentDidUpdate = () => {
        console.log("I made it!");
        if (sessionStorage.getItem('token')) {
            this.setState({isAuthenticated: true})
        }
    };

    sideDrawerClosehandler = () => {
        this.setState({sideDrawerOpen: false});
    }

    drawerToggleHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        })
    }

    render(props) {
        return (
            <div>
                <Toolbar
                    drawerToggleClicked={this.drawerToggleHandler} 
                    isAuth={this.state.isAuthenticated}/>
                <SideDrawer
                    close={this.sideDrawerClosehandler}
                    open={this.state.sideDrawerOpen}
                    isAuth={this.state.isAuthenticated} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </div>
            // needs state for open/close sideDrawer and possibly show/hide navItem's
        );
    }
};

export default Layout;
