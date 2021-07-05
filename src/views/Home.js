import React from 'react';
import { Link } from 'react-router-dom';
import AuthWrapper from '../layouts/AuthWrapper';
const Home = () => {
    return (
        <div>
            <AuthWrapper title="Hope page">

                <button> <Link to="/sign-up"> SignUp</Link> </button>
                <button> <Link to="/sign-in"> Sign in</Link> </button>

            </AuthWrapper>

        </div>
    )

}

export default Home;