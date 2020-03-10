import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post.js'

class App extends React.Component {

  constructor() {
    super();
    
    var info = [["First Restaurant", "Restaurant or Post Description.1"],
        ["Second Restaurant", "Restaurant or Post Description.2"],
        ["Third Restaurant", "Restaurant or Post Description.3"]
      ];

    this.state = {postInfo: info};
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          This is App header.
        </header>
        <Post postInfo={this.state.postInfo} />
      </div>
    );
  }
}

export default App;
