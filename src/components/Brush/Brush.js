import React, { Component } from 'react';
import './Brush.css';

class Brush extends Component {

  handleChange = (e) => {
    this.props.brushSizeChange(e.target.value);
  }

  render () {
    const value = this.props.lineWidth;
    return (
      <div>
        <label htmlFor="brush-size">
          Brush Size
        </label>
        <input name="brush-size" className="brushsize" onChange={this.handleChange} type="range" min="0" max="20" step="1" value={value} />
      </div>
    );
  }
}

export default Brush;
