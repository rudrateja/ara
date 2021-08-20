const initialState = [];


const employeeListReducer = (state = initialState, action) => {
switch (action.type) {
    case 'SET_EMPLOYEE_LIST': {
        return action.payload
    }
    default:
    return state;
}
};

export default employeeListReducer;