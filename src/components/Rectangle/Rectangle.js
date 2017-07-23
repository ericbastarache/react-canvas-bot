import React, { Component } from 'react';
import './Rectangle.css';

import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Rectangle extends Component {
  handleClick = (e) => {
    this.props.setRectActive(e.target.value);
  }

  render() {
    const value = this.props.rectActive;
    return (
      <Button onClick={this.handleClick} value={value}>
        <FontAwesome
          name='square'
          />
      </Button>
    );
  }
}

export default Rectangle;
