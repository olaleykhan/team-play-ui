import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown, Icon } from 'rsuite';
import SigninLink from '../SigninLink';
import SignoutLink from '../SignoutLink';
import { connect } from 'react-redux';
import './mainNav.css'

function MainNav({ auth }) {
  return (
    <Navbar>
      {/* <Navbar.Header  icon={<Icon icon="home" />}>

          <a href="#" className="navbar-brand logo">RSUITE</a>
        </Navbar.Header> */}
      <Navbar.Body>
        <Nav>
          <Link to="/"> <Nav.Item icon={<Icon icon="home" />} >Team-Play</Nav.Item></Link>
          {auth.uid && <Link to="/create-post"> <Nav.Item appearance="subtle" > Create Post</Nav.Item></Link>}
        </Nav>
        <Nav pullRight>
          {!auth.uid && <SigninLink title="sign In" to="/sign-in" />}
          {auth.uid && <SignoutLink title="sign Out" to="/sign-in" />}
        </Nav>
      </Navbar.Body>
    </Navbar>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  }
}
export default connect(mapStateToProps)(MainNav);
