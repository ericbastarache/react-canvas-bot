import React, { Component } from 'react';
import './Line.css';

import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Line extends Component {

  handleClick = (e) => {
    this.props.setLineActive(e.target.value);
  }

  render () {
    const value = this.props.lineActive
    return (
      <Button value={value} onClick={this.handleClick}>
        <FontAwesome
          name='minus'
          />
      </Button>
    );
  }
}

export default Line;
