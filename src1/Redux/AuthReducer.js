let authReducer = function (state = {}, action) {

    if(sessionStorage.name){
        state.user = sessionStorage.name;
        state.isLoggedIn = sessionStorage.isLoggedIn || true;
    }
    switch (action.type) {
        case 'LOGIN': {

            console.log('inside login action');
            state = { ...state };
            state['user'] = action.payload['user'];
            state['isLoggedIn'] = true;
            console.log('state in login : ', state);
            return state;
        }
        case 'LOGOUT': {
            console.log('inside logout');
            state = { ...state };
            delete state['user'];
            state["isLoggedIn"] = false;
            return state;
        }
        default: return state;
    }
}

export default authReducer;

