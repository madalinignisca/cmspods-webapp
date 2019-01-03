import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Input,
  Button,
  Label,
} from 'reactstrap';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  name: '',
  description: '',
  cms: '',
  error: null,
};

class AddProjectForm extends Component {
  constructor (props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmitHandler = event => {
    event.preventDefault();

    this.props.firebase
      .addProject(this.state)
      .then(docRef => {
        console.log("Document written: ", docRef);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      })
  };

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
      const {
          name,
          description,
          cms,
          error,
      } = this.state;

      const isInvalid =
          name === ''
          || description === ''
          || cms === '';

      return (
          <Form onSubmit={this.onSubmitHandler}>
            <FormGroup>
              <Input
                  name="name"
                  value={name}
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Project name"
              />
            </FormGroup>
            <FormGroup>
              <Input
                  name="description"
                  value={description}
                  onChange={this.onChangeHandler}
                  type="text"
                  placeholder="Describe shortly your project..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="cms">CMS</Label>
              <Input type="select" name="cms" id="cms" onChange={this.onChangeHandler}>
                <option>Choose a CMS</option>
                <option value="wordpress">WordPress</option>
                <option value="ghost">Ghost</option>
                <option value="drupal">Drupal</option>
                <option value="joomla" disabled={true}>Joomla</option>
                <option value="phpbb" disabled={true}>phpBB</option>
              </Input>
            </FormGroup>
            <Button disabled={isInvalid} type="submit">Create</Button>

              {error && <p>{error.message}</p>}
          </Form>
      );
  }
}

export default withFirebase(AddProjectForm);