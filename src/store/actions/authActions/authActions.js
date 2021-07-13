import { SIGNUP, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNOUT_SUCCESS } from './authActionTypes'


export const signup = (data) => {

    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({
            type: SIGNUP,
            payload: data

        })
    }
}

export const signin = (credentials) => {
    console.log(credentials)
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email, credentials.password
        )
            .then(() => {
                dispatch({ type: SIGNIN_SUCCESS, })

            })
            .catch((err) => {
                dispatch({
                    type: SIGNIN_ERROR,
                    payload: err

                });
            });

    }
}


export const signout = () => {
    console.log("2. clicked before dispatch")
    return(dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();
        console.log("3. clicking after firbase");
        firebase.auth().signOut()
        .then(()=>{
            console.log("4 . clicking after dispath")
            dispatch({type: SIGNOUT_SUCCESS })
        })
        .catch((err)=>{
            console.log('returned error', err);
        });
    }
}