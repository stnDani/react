import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';

//instead of aux we can use the Fragment component
class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p key="i1" onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="i2">{this.props.children}</p>
                <input key="i3" type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );
    }
};

export default withClass(Person, classes.Person);