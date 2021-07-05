import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import AuthWrapper from '../../layouts/AuthWrapper';
import Input from '../../components/UI/input/Input';
import Btn from '../../components/UI/button';
import authService from '../../services/auth.services';
import Spinner from '../../components/UI/spinner/spinner';

export class SignUp extends Component {
    constructor(props){
        super(props);
        this.service = new authService();
        this.state = {
            // user: {
                firstName: "",
                lastName: "Olalekan",
                userName: "lekandev",
                email: "test@gmail.com",
                password: "lekandev",
            // },
            loading: false,
            error: false
        }          
    }

  
    inputChangeHandler = (e) => {
        let {id,value}= e.target;

        this.setState( { firstName: value } );

        console.log(id,value)
    }
    handleFirstname=(e)=>{
        let {id,value}= e.target;
       
        this.setState( { firstName: value } );

        // console.log(id,value)
        // console.log(this.state.firstName)
    }
    handleFormSubmit=(e)=>{
        const user = {
            firstName: this.state.firstName,
            lastName:this.state.lastName,
            userName: this.state.userName,
            email: this.state.userName,
            password: this.state.password,            
        }

        e.preventDefault();
        this.setState({loading:true});
        this.service.sendSignUpData(user)
        .then(()=>this.setState({loading:false}));
        // axios.post('/users.json', user)
        // console.log(user)

    }
    
    render() {
       if (!this.state.loading) return (
            <AuthWrapper title="Sign Up for a team play account">

                <form onSubmit={this.handleFormSubmit}>
                    <Input label="First Name" type="input" id="firstName" onChange={this.handleFirstname} />
                    <Input label="Last Name" type="input" id="lastName" onChange={this.handleFirstname} />
                    <Input label="Username" type="input" id="userName" onChange={this.handleFirstname} />
                    <Input label="email" type="input" id="email" onChange={this.handleFirstname} />
                    <Input label="password" type="input" id="password" onChange={this.handleFirstname} />
                    <Btn > Submit</Btn>
                </form>
                <Link to="/"> <Btn> home </Btn></Link>

            </AuthWrapper>
        )

        return <Spinner/>
    }


}

export default SignUp;


