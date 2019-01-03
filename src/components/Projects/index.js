import React from 'react';

import AddProjectForm from './AddProjectForm';
import { withAuthorization } from '../Session';

const addProjectPage = () => {
  return (
    <div>
      <h1>Add project</h1>
      <AddProjectForm />
    </div>
  )
}

const condition = authUser => !!authUser;

const AddProjectPage = withAuthorization(condition)(addProjectPage)

export { AddProjectPage, AddProjectForm } ;