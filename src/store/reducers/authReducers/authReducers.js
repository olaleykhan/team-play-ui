import { SIGNUP_SUCCESS, SIGNUP_ERROR, SIGNIN_ERROR, SIGNIN_SUCCESS, SIGNOUT_SUCCESS } from '../../actions/authActions/authActionTypes';

const INITIAL_STATE = {
    isSignedin: false,
    hasSignedUp: false,
    authError: null,
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
                authError: action.payload.message
            }
        case SIGNOUT_SUCCESS:
            console.log("signed out")
            return {
                ...state,
                isSignedin: false,
                // authError: "Login Failed"
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authError: null
            }
        case SIGNUP_ERROR:
            return {
                ...state,
                authError: action.payload.message
            }

        default:
            return state;
    }


}

export default authReducer;