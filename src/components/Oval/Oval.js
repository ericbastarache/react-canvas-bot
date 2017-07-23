import React, { Component } from 'react';
import './Oval.css';

import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Oval extends Component {
  handleClick = (e) => {
    this.props.setOvalActive(e.target.value);
  }

  render() {
    const value = this.props.ovalActive;
    return (
      <Button onClick={this.handleClick} value={value}>
        <FontAwesome
          name='circle'
          />
      </Button>
    )
  }
}

export default Oval;
