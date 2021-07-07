import React from 'react';
import { Link } from 'react-router-dom';
import AuthWrapper from '../../../layouts/AuthWrapper';

import Input from '../../../components/UI/input/Input';


import Btn from '../../../components/UI/button';
class SignIn extends React.Component {
    render(){
        return (
            <AuthWrapper title="Sign In">
    
                <form>
                    <Input label="Username" type="input" />
                    <Input label="password" type="input" />
                    <Btn> Submit</Btn>
                </form>
                 <Link to="/"> <Btn> home </Btn></Link>
                
            </AuthWrapper>
           
        )
    }

}

export default SignIn;