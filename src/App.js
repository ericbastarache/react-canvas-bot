import React, { Component } from 'react';
import './App.css';
import LayoutContainer from './containers/LayoutContainer';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header headertext="React Canvas Slack Bot"/>
        <LayoutContainer />
      </div>
    );
  }
}

export default App;
