import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import AuthWrapper from '../../layouts/AuthWrapper';
import Input from '../../components/UI/input/Input';
import Btn from '../../components/UI/button';
import authService from '../../services/auth.services';
import Spinner from '../../components/UI/spinner/spinner';
import './signUp.css'

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.service = new authService();
        this.state = {
            // user: {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            // },
            loading: false,
            error: false,
            touched: {
                firstName: false,
                userName: false,
                email: false,
                password: false
            },
            formValid:false,
            formError:false,
        }

        this.handleblur= this.handleblur.bind(this);
        this.formValid=false;
    }

    handleInputChange = (e) => {
        let { id, value } = e.target;
        this.setState({ [id]: value });
        // console.log(id,value)
    }
    // handleFirstname=(e)=>{
    //     const {id,value}= e.target;       
    //     this.setState( { [id]: value } );
    //     // console.log(id,value)
    //     // console.log(this.state.firstName)
    // }
    handleFormSubmit = (e) => {
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
        }

        e.preventDefault();
        // this.formValid&&this.setState({formValid:true})
        if(this.formValid){
            this.setState({ loading: true });
            this.service.sendSignUpData(user)
            .then(() => this.setState({ loading: false }));
        } else{
            this.displayError();
        }
    
        // axios.post('/users.json', user)
        // console.log(user)
    }
    displayError=()=>{
        this.setState({formError:true})
        setTimeout(() => {
            this.setState({formError:false})

            
        }, 3000);
    }

    handleblur = (field) => (evt) => {
        // this.setState((state) => ({
        //     touched: { ...state.touched, [field]: true }
        // }));

        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    validate(firstName, userName, email, password) {
        let errors = {
            firstName: "",
            userName: "",
            email: "",
            password: ""
        };
        

        if (this.state.touched.firstName && firstName.length < 2) {
            errors.firstName = "First name should be greater than 2 characters"
        }

        if ((this.state.touched.userName && userName.length < 6) || (this.state.touched.userName && userName.length > 15)) {
            errors.userName = "Username can only be between 6 and 15 characters. please sdjust accordingly"
        }

        if (this.state.touched.password && password.length < 8) {
            errors.password = "password too short"
        }
        if ((this.state.touched.email && !email.includes('@')) || (this.state.touched.email && !email.includes('.'))) {
            errors.email = "this does not look like a valid email. please adjust appropriately."
        }
        if(errors.firstName.length<1 && errors.userName.length<1 && errors.email.length<1 && errors.password.length<1 && this.state.firstName.length>0 && this.state.email.length>0 && this.state.userName.length>0 && this.state.password.length>0){
            this.formValid=true;
        }else{
            this.formValid=false;

        }
        return errors;

    }

    render() {
        const errors = this.validate(this.state.firstName, this.state.userName, this.state.email, this.state.password);
        if (!this.state.loading) return (
            <AuthWrapper title="Sign Up for a team play account">

                {this.state.formError && <h4 className="form-error"> Please Fill form appropriately</h4>}

                <form onSubmit={this.handleFormSubmit}>
                    <Input label="First Name" type="input" id="firstName" value={this.state.firstName} onBlur={this.handleblur('firstName')} err={errors.firstName} onChange={this.handleInputChange} />
                    <Input label="Last Name" type="input" id="lastName" value={this.state.lastName} onChange={this.handleInputChange} />
                    <Input label="Username" type="input" id="userName" value={this.state.userName} onBlur={this.handleblur('userName')} err={errors.userName} onChange={this.handleInputChange} />
                    <Input label="email" type="input" id="email" value={this.state.email} onBlur={this.handleblur('email')} err={errors.email} onChange={this.handleInputChange} />
                    <Input label="password" type="input" id="password" value={this.state.password} onBlur={this.handleblur('password')} err={errors.password} onChange={this.handleInputChange} />
                    <Btn > Submit</Btn>
                </form>
                <Link to="/"> <Btn> home </Btn></Link>

            </AuthWrapper>
        )

        return <Spinner />
    }


}

export default SignUp;


