
export const updateEmployeeList = (empList)=>{
    return {
        type: 'SET_EMPLOYEE_LIST',
        payload:empList
    }

};

export const doLoginAction = ()=>{
    return {
        type: 'LOGIN'
    }
};

export const doLogoutAction = ()=>{
    console.log('Loggin out');
    return {
        type: 'LOGOUT'
    }
};

export const updateUsernameAction = (value)=>{
    return {
        type: 'UPDATE_USERNAME',
        value:value
    }
};

