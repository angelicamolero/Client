import  React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';

const NewAccount = () => {
    //get values from context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    //sign in state
    const [ user, saveUser ] = useState({
        name: '',
        email: '',
        password: '',
        confirm:''
    });

    //get from user
    const { name, email, password, confirm } = user;

    const onChange = (e) => {
        saveUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    //when the user wants to sign in
    const onSubmit = e => {
        e.preventDefault();

        //validate no empty fields
        if( name.trim() === '' || 
        email.trim() === '' || 
        password.trim() === '' || 
        confirm.trim() === '' ) {
            showAlert('All fields are required', 'alert-error');
            return;
        }
        //password minimun 6 characters
        if(password.length < 6) {
            showAlert('Password should be at least 6 characters', 'alert-error');
            return;
        }
        //identical 2 passwords
        if(password !== confirm) {
            showAlert('Passwords do not match', 'alert-error');
            return;
        }
        //take it to action
    }
    
    return (
        <div className="form-user">
            { alert ? ( <div className={`alert ${alert.category}`}>{alert.msg}</div>) : null}
            <div className="container-form shadow-dark">
                <h1>Get an Account</h1>
                <form 
                onSubmit={onSubmit}>
                    <div className="field-form">
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={name}
                        onChange={onChange}
                        />
                    </div>
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
                        <label htmlFor="confirm">Confirm Password</label>
                        <input 
                        type="password"
                        id="confirm"
                        name="confirm"
                        placeholder="Repeat your password"
                        value={confirm}
                        onChange={onChange}
                        />
                    </div>
                    <div className="field-form">
                        <input type="submit" className="btn btn-primary btn-block"
                        value="Register"
                        />
                    </div>
                </form>
                <Link to={'/'} className="account-link">
                    Sign in
                </Link>
            </div>
        </div>
    );
};

export default NewAccount;