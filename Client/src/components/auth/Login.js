import  React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Login = () => {

    //sign in state
    const [ user, saveUser ] = useState({
        email: '',
        passowrd: ''
    });

    //get from user
    const { email, password } = user;

    const onChange = (e) => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    //when the user wants to sign in
    const onSubmit = e => {
        e.preventDeault();
    }
    
    return (
        <div className="form-user">
            <div className="container-form shadow-dark">
                <h1>Sign In</h1>
                <form 
                onSubmit={onSubmit}>
                    <div className="field-form">
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        value={email}
                        onChange={onChange}
                        />
                    </div>
                    <div className="field-form">
                        <label htmlFor="password">Password</label>
                        <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Your password"
                        value={password}
                        onChange={onChange}
                        />
                    </div>
                    <div className="field-form">
                        <input type="submit" className="btn btn-primary btn-block"
                        value="Sign In"
                        />
                    </div>
                </form>
                <Link to={'/new-account'} className="account-link">
                    Don't have an account? Register
                </Link>
            </div>
        </div>
    );
};

export default Login;