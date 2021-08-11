import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Icon } from 'rsuite'

function SigninLink(props) {
    return (
        <Link to={props.to}>
            <Nav.Item icon={<Icon icon="cog" />} > {props.title}</Nav.Item>


        </Link>
    )
}

export default SigninLink
