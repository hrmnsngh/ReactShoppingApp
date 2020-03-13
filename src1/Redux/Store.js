import { createStore} from 'redux'
import AuthReducer from './AuthReducer'

var store = createStore(AuthReducer);



console.log('Default state form store : ', store.getState());
/* 
store.dispatch({
    type: 'LOGOUT',
    payload:{
        user: 'Harman'
    }
}); */

//console.log('Action from store : ', store.getState());

export default store;