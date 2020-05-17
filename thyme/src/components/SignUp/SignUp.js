import React, { Component } from 'react';
import  { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import * as ROLES from '../../constants/roles';

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

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpFormBase extends Component {
	constructor(props) {
		super(props);

		// spread syntax
		this.state = {...INITIAL_STATE};
	}

	onSubmit = event => {
		console.log("onSubmit");
		alert("hi new");
		const { username, email, passwordOne } = this.state;
		const roles = {};

	// 	this.props.firebase
	//       .doCreateUserWithEmailAndPassword(email, passwordOne)
	//       .then(authUser => {
	//       	console.log("email:" + email);
	//       	console.log("passwordOne" + passwordOne);
	//         this.setState({ ...INITIAL_STATE });
	//         this.props.history.push(ROUTES.HOME);
	//       })
	//       .catch(error => {
	//         this.setState({ error });
	//       });

	// 	event.preventDefault();
	// };

	this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
          roles,
        });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
      	alert(error);
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
		console.log(error);
        this.setState({ error });
      });

         event.preventDefault();
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
	
		// return (
	 //      <form onSubmit={this.onSubmit}>
	 //        <input
	 //          name="username"
	 //          value={username}
	 //          onChange={this.onChange}
	 //          type="text"
	 //          placeholder="Full Name"
	 //        />
	 //        <input
	 //          name="email"
	 //          value={email}
	 //          onChange={this.onChange}
	 //          type="text"
	 //          placeholder="Email Address"
	 //        />
	 //        <input
	 //          name="passwordOne"
	 //          value={passwordOne}
	 //          onChange={this.onChange}
	 //          type="password"
	 //          placeholder="Password"
	 //        />
	 //        <input
	 //          name="passwordTwo"
	 //          value={passwordTwo}
	 //          onChange={this.onChange}
	 //          type="password"
	 //          placeholder="Confirm Password"
	 //        />
	 //        <button disabled={isInvalid} type="submit">
	 //          Sign Up
	 //        </button>

	 //        {error && <p>{error.message}</p>}
	 //      </form>
  //   );

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

//React Router's built-in higher order component, which has access to the router's properties
const SignUpForm = compose(
	withRouter,
	withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };