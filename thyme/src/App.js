import './App.css';
import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Landing from './components/Landing/Landing';
import SignUpPage from './components/SignUp/SignUp';
import SignInPage from './components/SignIn/SignIn';
import PasswordForgetPage from './components/PasswordForget/PasswordForget';
import HomePage from './components/Home/Home';
import AccountPage from './components/Account/Account';
import AdminPage from './components/Admin/Admin';

import * as ROUTES from './constants/routes';


class App extends React.Component {
    render() {
      return (

        <Router>
          <div>
            <Navigation/>

            <hr />

            <Route exact path={ROUTES.LANDING} component={Landing}/>
            <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
            {/*<Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
            <Route exact path={ROUTES.HOME} component={HomePage} />
            <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
            <Route exact path={ROUTES.ADMIN} component={AdminPage} />*/}
          </div>
        </Router>
        
    );
  }
}

export default App;
