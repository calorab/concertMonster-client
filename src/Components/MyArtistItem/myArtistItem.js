import React from 'react';
import Button from '../UI/Button/Button';
import classes from './myArtistItem.module.css';

const myArtistItem = (props) => {


    return (
        <div className={classes.Result}>
            <h3>{props.children}</h3>
            <a href={props.link} target='_blank' rel='noopener noreferrer' >
                <Button btnType='Success' clicked={props.btnClicked}>Find Concerts</Button>
            </a>
            <Button btnType='Danger' clicked={props.cnclButton}>Unfollow</Button>
            <h5>On Tour til: {props.tour}</h5>
            
        </div>
    )
};

export default myArtistItem;
