import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom'
// import { Redirect } from 'react-router';

import FeedPost from '../../components/posts/FeedPost';


export class Feeds extends Component {
    render() {
        const { posts, auth } = this.props;
        console.log(auth)
        if (!auth.uid) return <Redirect to="/sign-in" />

        if (posts) {
            return (
                this.props.posts.map((post) => {
                    return <Link key={post.id} to={'feeds/' + post.id} >  <FeedPost post={post} /></Link>


                })
            )
        } else {
            return <h1 className="container center bg-green-400" >Loading...</h1>
        }
    }
}
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        posts: state.fireStore.ordered.posts,
        auth: state.firebase.auth
    }
}
// we use the compose function to chain the two higher order components together

export default compose(connect(mapStateToProps), firestoreConnect([{ collection: 'posts' }]))(Feeds)


// export default connect(mapStateToProps)(Feeds);
