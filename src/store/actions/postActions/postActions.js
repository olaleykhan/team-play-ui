import {CREATE_POST, CREATE_POST_ERROR} from './postActionTypes'


export const createPost = (data)=>{

    return (dispatch,getState, {getFirebase,getFirestore})=>{
        // using firestore to send data to database
        const firestore = getFirestore();
        firestore.collection('posts').add({
            // data contains id, title and article
            // note that id is generated from time stamp and is only used temporarily. please remove
            //  when you have alternate id source and remove this comment too. thanks
            ...data,
            authorUserName: "Lekandev",
            authorId: "xyz",
            createdAt: new Date()
        })
        .then(()=>{
            dispatch({type: CREATE_POST, payload:data})
        })
        .catch((err)=>{
            console.log(err);
            dispatch({type: CREATE_POST_ERROR, payload:err})
        })
    }
}