import React from 'react';
import SignUpForm from './SignUpForm';

import { FirebaseContext } from '../Firebase';

const SignUpPage = () => (
    <div>
        <h1>Sign Up</h1>
        <FirebaseContext.Consumer>
            { firebase => <SignUpForm firebase={firebase} /> }
        </FirebaseContext.Consumer>
    </div>
)

export default SignUpPage;