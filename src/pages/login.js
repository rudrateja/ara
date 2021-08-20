import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {doLoginAction, updateUsernameAction} from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import authData from '../auth.json';


const LoginPage = ()=>{
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        username: {
            hasErrors:false, 
            message:''
        },
        password: {
            hasErrors:false, 
            message:''
        }
    });
    const [submitError, setSubmitError] = useState('');
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state=>state.loggedInUser);
    let history = useHistory();

    useEffect(()=>{
        if(loggedInUser.isLoggedIn){
            history.push('/employee-list'); 
        }
    }, [loggedInUser]);

    const validateCredentials =  (username, password)=>{

        if(username===authData.username && password===authData.password){
            return true;
        } else {
            
            return false;
        }
       
    };

    
    const doLogin = async (e)=>{
        e.preventDefault();
        setSubmitError('');
        let tmpErrors = {...errors};
        if(!username){
            tmpErrors.username.hasErrors = true;
            tmpErrors.username.message = 'Please Enter Username';
        } else {
            tmpErrors.username.hasErrors = false;
            tmpErrors.username.message = '';
        }
        if(!password){
            tmpErrors.password.hasErrors = true;
            tmpErrors.password.message = 'Please Enter Password';  
        } else {
            tmpErrors.password.hasErrors = false;
            tmpErrors.password.message = '';
        }
        setErrors(tmpErrors);
        if(tmpErrors.username.hasErrors || tmpErrors.password.hasErrors){
            return false;
        }
        const isCredValid = await validateCredentials(username, password);
        if(isCredValid){
            dispatch(doLoginAction());
            dispatch(updateUsernameAction(username));
            console.log('Login successfull');
        } else {
            setSubmitError('Invalid Username or Password');
            console.log('login failed');
        }
    };
    return (
        <div className="login-page">
            
            <div className="login-block">
                <div className="login-logo-block">
                    ARA
                </div>
                <div className="login-form-block">
                {submitError.length>0&&<div className="error-text">
                    {submitError}
                </div>}
                    <form onSubmit={(e)=>{doLogin(e)}}>
                        <div className="form-element">
                            <input type="text" placeholder="Username" onChange={(e)=>setUserName(e.target.value)} className={`ara-input ${errors.username.hasErrors?'input-error':''}`}  />
                            {errors.username.hasErrors&&<span className="error-text">{errors.username.message}</span>}
                        </div>
                        <div className="form-element">
                            <input type="password" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}  className={`ara-input ${errors.password.hasErrors?'input-error':''}`} />
                            {errors.password.hasErrors&&<span  className="error-text">{errors.password.message}</span>}
                        </div>
                        <div className="form-element" style={{display:'flex', justifyContent:'flex-end'}}>
                            <input type="submit"  value="Login" className="ara-button-primary"  />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;