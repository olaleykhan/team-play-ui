import React from 'react';
import { Link } from 'react-router-dom';
import AuthWrapper from '../layouts/AuthWrapper';
import FeedPost from '../components/posts/FeedPost';

const Home = () => {
    return (
        <div className="show-container">
            <AuthWrapper title="Hope page">

                <button className=""> <Link to="/sign-up"> SignUp</Link> </button>
                <button> <Link > Sign in</Link> </button>
                <Link className="my-btn btn-primary" >Create a Post </Link>

            </AuthWrapper>

            <FeedPost/>

        </div>
    )

}

export default Home;