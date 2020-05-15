import React, { Component } from 'react';
import  { Link } from 'react-router-dom';

import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';

import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
	<div>
		<h1>SignUp</h1>
		<SignUpForm/>
	</div>
);

const INITIAL_STATE = {
	username: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null,
}

class SignUpForm extends Component {
	constructor(props) {
		super(props);

		// spread syntax
		this.state = {...INITIAL_STATE};
	}

	onSubmit = event => {

	};

	onChange = event => {
		this.setState({[event.target.name]: event.target.value});
	};

	render() {
		const {
			username,
			email,
			passwordOne,
			passwordTwo,
			error,
		} = this.state;

		const isInvalid = 
			passwordOne !== passwordTwo ||
			passwordOne === '' ||
			email === '' ||
			username === '';
	
		return (
			<Form onSubmit={this.onSubmit}>
				<Form.Group controlId="username">
					<Form.Label>Full Name</Form.Label>
					<Form.Control 
						name="username" 
						value={username} 
						onChange={this.onChange} 
						placeholder="Full Name">
					</Form.Control>
				</Form.Group>
				<Form.Group controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						name="email"
						value={email}
						onChange={this.onChange}
						type="email"
						placeholder="Email Address">
					</Form.Control>
					<Form.Text className="text-muted">
      					We'll never share your email with anyone else.
    				</Form.Text>
				</Form.Group>
				<Form.Group controlId="passwordOne">
					<Form.Label>Password</Form.Label>
					<Form.Control
						name="passwordOne"
						value={passwordOne}
						onChange={this.onChange}
						type="password"
						placeholder="Password">
					</Form.Control>
				</Form.Group>
				<Form.Group controlId="passwordTwo">
					<Form.Control
						name="passwordTwo"
						value={passwordTwo}
						onChange={this.onChange}
						type="password"
						placeholder="Confirm Password">
					</Form.Control>
				</Form.Group>

				<Button disabled={isInvalid} type="submit">Sign Up</Button>
				
				{/*Firebase's error objects*/}
				{error && <p>{error.message}</p>}
			</Form>
		);
	}
};

const SignUpLink = () => (
	<p>
		<Link to={ROUTES.SIGN_UP}>Sign Up</Link>
	</p>
);

export default SignUpPage;
export { SignUpForm, SignUpLink };