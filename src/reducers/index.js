// import { combineReducers } from 'react-redux';
import { combineReducers } from 'redux';


import loggedInUserReducer from "./loggedInUserReducer";
import employeeListReducer from "./employeeListReducer";

const rootReducer = combineReducers({
    loggedInUser: loggedInUserReducer,
    employeeList: employeeListReducer
});

export default rootReducer;