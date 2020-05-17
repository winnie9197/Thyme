import React from 'react';

//Creates both provider and consumer components
const FirebaseContext = React.createContext(null);

//Creates a higher order component to access Firebase
//this is called a curried function, which takes multiple arguments into a sequence of functions
export const withFirebase = Component => props => (
	<FirebaseContext.Consumer>
		{firebase => <Component {...props} firebase={firebase} />}
	</FirebaseContext.Consumer>
);

export default FirebaseContext;