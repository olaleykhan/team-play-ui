import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthWrapper from '../../layouts/AuthWrapper';
import FeedPost from '../../components/posts/FeedPost';
import Button from '../../components/UI/button';
import './Home.css'


class Home extends React.Component {
    render() {
        if (this.props.auth.uid) return <Redirect to="/feeds" />
        return (
            <div className=" home" >
                <AuthWrapper>

                    {/* <button className=""> <Link to="/sign-up"> SignUp</Link> </button> */}
                    <div className="header mb-20">
                        <h3 className="text-green-400 mb-5 "> Welcome to Team play </h3>
                        <p> burned out from work? Team play to the rescure. interact and have fun with your co workers </p>

                    </div>


                    <Link to="/sign-up">
                        <Button bg="green"> Join now </Button>
                    </Link>


                    <blockquote cite="https://unsplash.com/@franciscovenancio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Photo by Francisco Venâncio on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </blockquote>

                </AuthWrapper>

                <FeedPost />

            </div>
        )
    }

}


const mapStateToProps = (state) => {
    // console.log(state)
    return {
        posts: state.fireStore.ordered.posts,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Home);
