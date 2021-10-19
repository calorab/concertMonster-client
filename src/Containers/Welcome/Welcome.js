import React, {Component} from 'react';
import classes from './Welcome.module.css';

import Button from '../../Components/UI/Button/Button';

export class Welcome extends Component {

    state = {
        token: false
    }

    componentDidMount = () => {
        if (sessionStorage.getItem('token')) {
            this.setState({token: true});
        } 
    }; 

    getStartedHandler = () => {
        if (this.state.token) {
            this.props.history.push('/dashboard');
        }
        else {
            this.props.history.push('/auth');
        }
    }

    render() {
        return (
            <div>
                <h1>Welcome to Concert Monster!</h1>

                <p className={classes.Paragraph} >Thanks for checking out my app! ConcertMonster will 
                    help you search for artists or bands that you like, follow them and get information 
                    on when they are touring - all using the SongKick API. Click <strong>Get Started </strong>   
                    below to sign in using the Demo account. Once you have signed in, you can search for artists and 
                    follow them to add them to your Followed Artists List which you can toggle by clicking the button 
                    at the top of your dashboard. Have fun!</p>
                <Button btnType='Success' clicked={this.getStartedHandler}>GET STARTED</Button>
            </div>
        );
    }
};

export default Welcome;
