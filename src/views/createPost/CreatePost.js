import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

import Input from '../../components/UI/input/Input';
import Btn from '../../components/UI/button';
import {createPost} from '../../store/actions/index'

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            article: "",

        }
    }

    handleInputChange=(e)=>{
        let { id, value } = e.target;
        this.setState({ [id]: value });
    }
    handleFormSubmit=(e)=>{
        const post = {
            title: this.state.title,
            article: this.state.article
        }

        e.preventDefault();

        this.props.createPost(post)

    }

    render() {

        if(!this.props.auth.uid) return <Redirect to="/sign-in" />
        return (
            <div style={{ textAlign: "center" }}>
                <div> <h2> Please create your post here</h2> </div>

                <form onSubmit={this.handleFormSubmit}>

                    <Input label="Title" id="title" value={this.state.title} onChange={this.handleInputChange} type="input" />
                    <Input label="Article" type="textarea" value={this.state.article} id="article" onChange={this.handleInputChange} />
                    <Btn> Submit post</Btn>
                </form>

            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (value) => dispatch(createPost(value)),
    }
}

const mapStateToProps = (state)=>{
    return{
        auth : state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);

