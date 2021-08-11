import { SIGNUP_SUCCESS,SIGNUP_ERROR, SIGNIN_SUCCESS, SIGNIN_ERROR, SIGNOUT_SUCCESS } from './authActionTypes'


export const signup = (newUser) => {

    // console.log(newUser);

    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        )
        .then((res)=>{
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                userName: newUser.userName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        })
        .then(()=>{
            dispatch({
                type: SIGNUP_SUCCESS,  
            })

        })
        .catch((err)=>{
            console.log('returned error in signup ', err);
            dispatch({type:SIGNUP_ERROR, payload:err})
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
                console.log('returned error in signin', err);
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