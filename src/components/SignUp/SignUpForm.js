import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import {
  Button,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

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

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onSubmitHandler = event => {
        event.preventDefault();
        const { email, passwordOne } = this.state;
    debugger;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({
                    ...INITIAL_STATE
                });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({
                    error
                });
            });
    };

    onChangeHandler = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

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
            <Form onSubmit={this.onSubmitHandler}>
              <FormGroup>
                <Input
                    name="username"
                    value={username}
                    onChange={this.onChangeHandler}
                    type="text"
                    placeholder="Full Name"
                />
              </FormGroup>
              <FormGroup>
                <Input
                    name="email"
                    value={email}
                    onChange={this.onChangeHandler}
                    type="email"
                    placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <Input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChangeHandler}
                    type="password"
                    placeholder="Password"
                />
              </FormGroup>
              <FormGroup>
                <Input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChangeHandler}
                    type="password"
                    placeholder="Confirm Password"
                />
              </FormGroup>
              <Button disabled={isInvalid} type="submit">Sign Up</Button>

                {error && <p>{error.message}</p>}
            </Form>
        );
    }
}

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpForm;
