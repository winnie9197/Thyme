import './Navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import * as ROUTES from '../../constants/routes';

class Navigation extends React.Component {
	render() {
		return (
			<div>
				<Navbar activeKey="#home" variant="light">
		          <Navbar.Brand href="#home">
		          <img
		            src="./images/thyme-logo.png"
		            width="30"
		            height="30"
		            className="d-inline-block align-top"
		            alt="React Bootstrap logo"
		          />Thyme
		          </Navbar.Brand>
		          <Nav>
		          	<Nav.Item>
	              	  <Link to={ROUTES.SIGN_IN}>Sign In</Link>
		            </Nav.Item>
		          	<Nav.Item>
		              <Link to={ROUTES.LANDING}>Landing</Link>
		            </Nav.Item>
		            <Nav.Item>
		              <Link to={ROUTES.HOME}>Home</Link>
		            </Nav.Item>
		            <Nav.Item>
		              <Link to={ROUTES.ACCOUNT}>Account</Link>
		            </Nav.Item>
		            <Nav.Item>
		              <Link to={ROUTES.ADMIN}>Admin</Link>
		            </Nav.Item>
		          </Nav>
		        </Navbar>
			</div>
		);
	}
}

export default Navigation;