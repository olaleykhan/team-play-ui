import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Panel } from 'rsuite';
import { connect } from 'react-redux';

import { signin} from '../../../store/actions';

import AuthWrapper from '../../../layouts/AuthWrapper';
import Input from '../../../components/UI/input/Input';
import Btn from '../../../components/UI/button';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }
    handleInputChange = (e) => {
        let { id, value } = e.target;
        this.setState({ [id]: value });
        // console.log(id,value)
    }
    handleSubmit= (e) =>{

        const details = {
            email : this.state.email,
            password : this.state.password
        }

       
        // console.log(this.state);
        this.props.signin(details);

        e.preventDefault();
    }

    render() {
        if(this.props.auth.uid) return <Redirect to="/feeds" />
        return (
            <AuthWrapper title="">

                <h1>{this.props.authError}</h1>

                <Panel shaded>
                    <h3> Sign In </h3>
                    <form onSubmit={this.handleSubmit} >
                        <Input label="email" type="input" value={this.state.email} id="email" onChange={this.handleInputChange}  />
                        <Input label="password" type="input" value={this.state.password} id="password" onChange={this.handleInputChange}  />
                        <Btn> Submit</Btn>
                    </form>
                </Panel>

                <p> Have no account yet? click <Link className="text-primary" to="/sign-up"> here </Link> to join  </p>


            </AuthWrapper>

        )
    }

}

const mapDispatchToProps= dispatch=>{
    return{
        signin : (value) =>dispatch(signin(value))
    }
}

const mapStateToProps = state=>{
    console.log(state)
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);