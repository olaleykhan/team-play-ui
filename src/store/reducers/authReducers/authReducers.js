import { SIGNUP, SIGNIN_ERROR, SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from '../../actions/authActions/authActionTypes';

const INITIAL_STATE = {
    isSignedin: false,
    hasSignedUp: false,
    authError: null
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGNIN_SUCCESS:
            return {
                ...state,
                isSignedin: true,
                authError : null

            }
        case SIGNIN_ERROR:
            return {
                ...state,
                authError: "Login Failed"
            }
        case SIGNOUT_SUCCESS:
            console.log("signed out")
            return {
                ...state,
                isSignedin: false,
                // authError: "Login Failed"
            }
        case SIGNUP:
            return {
                ...state,
                hasSignedUp: true
            }

        default:
            return state;
    }


}

export default authReducer;