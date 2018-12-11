import React, { Component } from 'react';

class SignUpForm extends Component {
    constructor (props) {
        super(props);
    }

    onSubmitHandler = event => { };

    onChangeHandler = event => { };

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
            
            </form>
        );
    }
}

export default SignUpForm;