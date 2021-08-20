import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import {doLogoutAction} from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

const Header = ()=>{
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state=>state.loggedInUser);
    let history = useHistory();
    const doLogout = ()=>{
        console.log('Do Logout');
        dispatch(doLogoutAction());
        

    };
    useEffect(()=>{
        if(!loggedInUser.isLoggedIn){
            history.push('/login'); 
        }
    }, [loggedInUser]);
    return (
        <div className="ara-header">
            <div className="dashboard-logo">
             <Link to="/" className="nav-item"> ARA </Link>
            </div>
            <div className="nav-block">
                <nav>
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/employee-list"  className="nav-item">Employee List</Link>
                    
                </nav>
            </div>
            <div className="user-action-block">
                <span style={{margin:'10px'}}>{loggedInUser.isLoggedIn?`Welcome ${loggedInUser.username}!`:'You are Logged out! Please Login'}</span>
                <button className="logout-button" onClick={()=>doLogout()}>{loggedInUser.isLoggedIn?'Logout':'Login'}</button>
            </div>
        </div>
    )
};

export default Header;