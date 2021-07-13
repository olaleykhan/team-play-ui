import { combineReducers } from "redux";
import authReducer from './authReducers/authReducers';
import postReducers from './postReducers/postReducers';
import {firestoreReducer} from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postReducers,
    fireStore: firestoreReducer,
    firebase : firebaseReducer
});


export default rootReducer;