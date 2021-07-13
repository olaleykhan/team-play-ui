import React, { Component } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';

import SinglePost from '../../../components/posts/singlepost/SinglePost';

export class FeedDetails extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         post:{}
    //     }
    // }
    render() {
       

        return (
            <div>
                <SinglePost post={this.props.post}/>
                
            </div>
        )
    }
}
const mapStateToProps=(state, ownProps)=>{
    const id = ownProps.match.params.id;
    const posts =  state.fireStore.data.posts;
    const post = posts? posts[id]: null; 
    return{
       post: post
    }
}
export default compose(connect(mapStateToProps), firestoreConnect([{collection:'posts'}]))(FeedDetails)
