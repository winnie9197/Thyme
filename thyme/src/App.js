import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Landing from './components/Landing/Landing';
// import logo from './logo.svg';
import './App.css';
// import Post from './Post.js';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Carousel from 'react-bootstrap/Carousel';

class App extends React.Component {
    render() {
      return (
        <div>
          <Router>
            <Navigation/>
          </Router>
          <Landing/>
        </div>
    );
  }
}

export default App;
