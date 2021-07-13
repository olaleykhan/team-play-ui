import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Icon } from 'rsuite';
import { connect } from 'react-redux';
import { signout } from '../store/actions';



function SignoutLink(props) {
    const handleClick=()=>{
        props.signout();
        console.log("1 clicked")
    
    }
    return (
        <Link onClick={handleClick} to={props.to}>
            <Nav.Item icon={<Icon icon="cog" />} > {props.title}</Nav.Item>


        </Link>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        signout: ()=>dispatch(signout())
    }
}

export default connect(null,mapDispatchToProps)(SignoutLink);
