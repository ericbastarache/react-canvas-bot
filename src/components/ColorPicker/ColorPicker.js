import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  handleChange = (e) => {
    this.props.changeColor(e.target.value);
  }

  render() {
    const color = this.props.colorVal;
    return (
      <div>
        <label htmlFor="color-picker">
          Brush Color:
        </label>
        <input name="color-picker" type="color" value={color} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default ColorPicker;
