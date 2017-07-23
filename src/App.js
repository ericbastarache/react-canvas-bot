import React, { Component } from 'react';
import './App.css';
import CanvasContainer from './containers/CanvasContainer';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header headertext="React Canvas Slack Bot"/>
        <CanvasContainer />
      </div>
    );
  }
}

export default App;
