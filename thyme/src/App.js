import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post.js'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Carousel from 'react-bootstrap/Carousel'

class App extends React.Component {

  constructor() {
    super();
    
    var info = [["1st Restaurant", "Restaurant or Post Description...", "./images/holder.jpg"],
        ["2nd Restaurant", "Restaurant or Post Description...", "./images/holder2.jpg"],
        ["3rd Restaurant", "Restaurant or Post Description...", "./images/holder3.jpg"]
      ];

    this.state = {postInfo: info};
  }
  
  render() {
    return (
      <div className="App">
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
              <Nav.Link href="#home">What is Thyme?</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Get Started</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Thyme Pink</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Thyme Yellow</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/Yellow-landing-2.png"
              alt="First slide"
            />
            <Carousel.Caption>
              It takes a meal to meet someone new.
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


        <Post postInfo={this.state.postInfo} />
      </div>
    );
  }
}

export default App;
