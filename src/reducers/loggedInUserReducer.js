const initialState = {
    username:'',
    isLoggedIn:false
  };


const loggedInUserReducer = (state = initialState, action) => {
switch (action.type) {
    case 'LOGOUT': {
        console.log(action);
        return {
            ...state,
            isLoggedIn:false,
            username:''
      }
    }
    case 'LOGIN': {
    return {
        ...state,
        isLoggedIn:true
      }  
    }
    case 'UPDATE_USERNAME': {
        return {
            ...state,
            username:action.value
          }  
        }
    default:
    return state;
}
};

export default loggedInUserReducer;