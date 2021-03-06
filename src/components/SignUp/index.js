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

import React from 'react';

import SignUpForm from './SignUpForm';
import SignUpLink from './SignUpLink';
import { SignInLink } from '../SignIn';

const SignUpPage = () => (
    <div>
        <h1>Sign Up</h1>
        <SignUpForm />
        <SignInLink>Already have an account?</SignInLink>
    </div>
)

export default SignUpPage;
export { SignUpForm, SignUpLink };
