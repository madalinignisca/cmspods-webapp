import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
}

class SignUpFormBase extends Component {
    constructor (props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmitHandler = event => {
        const { email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({
                    ...INITIAL_STATE
                });
            })
            .catch(error => {
                this.setState({
                    error
                });
            });
        
        event.preventDefault();
    };

    onChangeHandler = event => { };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo
            || passwordOne === ''
            || email === ''
            || username === '';

        return (
            <form onSubmit={this.onSubmitHandler}>
                <input
                    name="username"
                    value={username}
                    onChange={this.onChangeHandler}
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChangeHandler}
                    type="email"
                    placeholder="Email"
                />
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChangeHandler}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChangeHandler}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={isInvalid} type="submit">Sign Up</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const SignUpForm = withFirebase(SignUpFormBase);

export default SignUpForm;