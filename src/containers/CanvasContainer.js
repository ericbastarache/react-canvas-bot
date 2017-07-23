import React, { Component } from 'react';

class CanvasContainer extends Component {
  componentDidMount () {
    let context = this.canvas.getContext('2d');
    context.fillStyle = 'red';
    context.fillRect(20, 20, 150, 150);
  }

  onMouseDown = (e) => {
    let context = this.canvas.getContext('2d');
    context.fillStyle = 'blue';
    context.beginPath();
    context.arc(250, 100, 50, 0, 2 * Math.PI);
    context.fill();
  }

  onMouseUp = (e) => {
    
  }

  onMouseMove = (e) => {

  }

  render () {
    return (
      <canvas
        id="mycanvas"
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseMove={this.onMouseMove}
        onMouseOut={this.onMouseUp}
        width="800"
        height="600"
        ref={(canvas) => this.canvas = canvas}
        />
    );
  }
}

export default CanvasContainer;
