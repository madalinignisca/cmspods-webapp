/**
 * CMS Pods Manager
 * Copyright (C) Madalin Ignisca
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react';
import {
  Button,
  Input,
  Form,
  FormGroup
} from 'reactstrap';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmitHandler = event => {
    event.preventDefault();

    const { passwordOne } = this.state;
    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === '';
    
      return (
        <Form onSubmit={this.onSubmitHandler}>
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
              <Button disabled={isInvalid} type="submit">Send</Button>

                {error && <p>{error.message}</p>}
            </Form>
      )
  }
}

export default withFirebase(PasswordChangeForm);
