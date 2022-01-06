import { AUTHENTICATE } from "./action";

const initState = { loggedIn : false }

function authReducer( state = initState, action  ) {
    switch( action.type ){
        case AUTHENTICATE: 
            return {...state, loggedIn: true}
        default:
            return state;
    }
}

export default authReducer;