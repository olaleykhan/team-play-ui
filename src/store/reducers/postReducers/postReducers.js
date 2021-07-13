import { CREATE_POST, CREATE_POST_ERROR } from '../../actions/postActions/postActionTypes';

const INITIAL_STATE = {
    posts: [
        {
            id: "xyz",
            title: "Title post 1",
            article: "Article belonging to post 1"
        },
        {
            id: "xyhgz",
            title: "Title post 2",
            article: "Article belonging to post 2"
        },
    ]
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CREATE_POST:
            const newPost = {...action.payload, id: new Date()}
            return {
                ...state,
                posts: state.posts.concat(newPost)
            };
        case CREATE_POST_ERROR:
            console.log("[Create post error]", action.payload);
            return state;

        default:
            return state;
    }
}

export default postReducer;