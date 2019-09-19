import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = ( props ) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="type" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);