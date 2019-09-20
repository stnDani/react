import React from 'react';
import './Person.css';

const person = ( props ) => {

    const rand = Math.random();
    
    if (rand > 0.7) {
        throw new Error('Something went wrong!');
    }

    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="type" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;