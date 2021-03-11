import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className="tc pa3 ma2 fl br3 shadow-5 bg-light-green grow dib pointer">
            <img src={"https://robohash.org/" + props.id + "?size=200x200"} alt=""/>
            <div>
                <h2>{ props.name }</h2>
                <span>{ props.email }</span>
            </div>
        </div>
    );
}

export default Card;