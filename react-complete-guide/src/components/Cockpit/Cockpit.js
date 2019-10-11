import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css'

const Cockpit = props => {

    const toggleBtnRef = useRef(null);

    //componentDidUpdate and componentDidMount
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // setTimeout(() => {
        //     alert('Saved data to cloud');
        // }, 1000);
        toggleBtnRef.current.click();

        // it runs before the main useEffect, but after the first render cycle
        return (() => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        });
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return (() => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        });
    });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle persons</button>
        </div>
    );
};

export default React.memo(Cockpit);