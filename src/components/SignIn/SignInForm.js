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
    email: '',
    password: '',
    error: null
}

class SignInFormBase extends Component {
    constructor (props) {
        super(props);

        this.state = { ...INITIAL_STATE };

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onSubmitHandler = event => {
        event.preventDefault();
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
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
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === ''
            || email === '';

        return (
            <Form onSubmit={this.onSubmitHandler}>
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
                    name="password"
                    value={password}
                    onChange={this.onChangeHandler}
                    type="password"
                    placeholder="Password"
                />
              </FormGroup>
              <Button disabled={isInvalid} type="submit">Sign In</Button>

                {error && <p>{error.message}</p>}
            </Form>
        );
    }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInForm;
