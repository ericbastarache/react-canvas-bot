import React, { Component } from 'react';
import './Eraser.css';

import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Eraser extends Component {
  render() {
    return (
      <Button onClick={this.handleClick}>
        <FontAwesome
          name='eraser'
          />
      </Button>
    );
  }
}

export default Eraser;
