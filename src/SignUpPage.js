import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import Alert from "./Alert";


/**Sign up form
 *
 * shows form and manages update to state on changes.
 * On submission:
 * - calls signup function prop
 * - redirect to /companies route
 *
 * Routes ---> Signup form -->
 * Routed as /signup
 */


function SignUpPage({ signup }) {
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        email: ''
    });

    const [formErrors, setFormErrors] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    console.debug(
        'SignupForm',
        'signup=', typeof SignupForm,
        'formData=', formData,
        'formErrors=', formErrors,
    );

    /**Handle form submit
     *
     * Calls login function prop and, if successful, redirect to /homepage.
     */

    //useEffect(() => {
        const handleSubmit = (evt) => {
            evt.preventDefault();
            //setSubmitted(true);
            if(formData.username
                && formData.firstName
                && formData.lastName
                && formData.password
                && formData.email){
                setValid(true);
            }
            setSubmitted(true);
            //setFormData("");
            // let result = await signup(formData);
            // if (result.success) {
            //     history.push('./');
            // }
            // else {
            //     setFormErrors(result.errors);
            // }
        }
    //});

    /**update form data field*/

    function handleChange(evt) {
            const { name, value } = evt.target;
            setFormData(data => ({
                ...data,
                [name]: value
            }));
        };
    return (
        <div className="SignupPage">
            <div className='container col-md-6 offset-md-3 col-lg-4 offset-lg-4'>
                <h2 className='mb-3'>Sign Up</h2>
                <div className='card'>
                    <div className='card-body'>
                        <form class="register-form" onSubmit={handleSubmit}>
                        {submitted && valid ? <div className='alert alert-success'>Thank you for registering!</div> : null}
                            <div className='form-group'>
                                <label>Username</label>
                                <input
                                    name='username'
                                    className='form-control'
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                {submitted && !formData.username ? <span id="username-error">Please enter a username</span> : null}
                            </div>

                            <div className='form-group'>
                                <label>Password</label>
                                <input
                                    type='password'
                                    name='password'
                                    className='form-control'
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {submitted && !formData.password ? <span id="password-error">Please enter a password</span> : null}
                            </div>

                            <div className='form-group'>
                                <label>First name</label>
                                <input
                                    name='firstName'
                                    className='form-control'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                {submitted && !formData.firstName ? <span id="first-name-error">Please enter a first name</span> : null}
                            </div>

                            <div className='form-group'>
                                <label>Last name</label>
                                <input
                                    name='lastName'
                                    className='form-control'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                                {submitted && !formData.lastName ? <span id="last-name-error">Please enter a last name</span> : null}
                            </div>

                            <div className='form-group'>
                                <label>Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    className='form-control'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {submitted && !formData.email ? <span id="email-error">Please enter an email address</span> : null}
                            </div>

                            {formErrors.length
                                ? <Alert type='danger' messages={formErrors} />
                                : null
                            }

                            <button
                                type='submit'
                                className='btn btn-primary float-right'
                                onSubmit={handleSubmit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
