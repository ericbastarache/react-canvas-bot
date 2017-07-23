import React, { Component } from 'react';
import './Line.css';

import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Line extends Component {
  render () {
    return (
      <Button>
        <FontAwesome
          name='minus'
          />
      </Button>
    );
  }
}

export default Line;
