import  React, { useContext, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const NewAccount = (props) => {
    //get values from context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, authenticated, registerUser} = authContext;

    //in case that users authenticated or duplicated
    useEffect(() => {
        if(authenticated) {
            props.history.push('/projects')
        }
        if(message){
            showAlert(message.msg, message.category)
        }
    }, [message, authenticated, props.history])

    //sign in state
    const [ user, saveUser ] = useState({
        name: '',
        mail: '',
        password: '',
        confirm:''
    });

    //get from user
    const { name, mail, password, confirm } = user;

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
        mail.trim() === '' || 
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
        registerUser({
            name,
            mail,
            password
        })
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
                        name="mail"
                        placeholder="Your email"
                        value={mail}
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