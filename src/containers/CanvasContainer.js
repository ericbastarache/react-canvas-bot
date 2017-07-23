import React, { Component } from 'react';

import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import Line from '../components/Line/Line';
import Oval from '../components/Oval/Oval';
import Rectangle from '../components/Rectangle/Rectangle';
import Brush from '../components/Brush/Brush';
import ColorPicker from '../components/ColorPicker/ColorPicker';

class CanvasContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lineWidth: 0,
      colorVal: '#000000',
      rectActive: false,
      ovalActive: false,
      lineActive: false,
      brushActive: false
    }
  }

  componentDidMount () {
    const canvas = this.canvas;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const ctx = this.canvas.getContext('2d');

    this.setState({
      canvas,
      ctx
    })
  }

  onMouseDown = (e) => {
    const rect = this.state.canvas.getBoundingClientRect();
    this.state.ctx.beginPath();
    this.setState({
      lastX: e.clientX - rect.left,
      lastY: e.clientY - rect.top
    });

    this.setState({
      drawing: true
    });
  }

  onMouseUp = (e) => {
    this.setState({
      drawing: false
    });
  }

  onMouseMove = (e) => {
    if(this.state.drawing) {
      const rect = this.state.canvas.getBoundingClientRect();
      const lastX = this.state.lastX;
      const lastY = this.state.lastY;
      let currentX = e.clientX - rect.left;
      let currentY = e.clientY - rect.top;

      this.draw(lastX, lastY, currentX, currentY);
      this.setState({
        lastX: currentX,
        lastY: currentY
      });
    }
  }

  draw(lx, ly, cx, cy) {
    const newContext = this.state.ctx;
    // newContext.strokeStyle = this.props.brushColor;
    // newContext.lineWidth = this.props.lineWidth;
    newContext.strokeStyle = this.state.colorVal;
    newContext.lineWidth = this.state.lineWidth;
    this.setState({
      ctx: newContext
    });

    this.state.ctx.moveTo(lx, ly);
    this.state.ctx.lineTo(cx, cy);
    this.state.ctx.stroke();
  }

  handleBrushSizeChange = (e) => {
    this.setState({lineWidth: e})
  }

  handleColorChange = (e) => {
    this.setState({colorVal: e});
  }

  setLineActive = (e) => {
    this.setState({
      lineActive: true,
      rectActive: false,
      ovalActive: false,
      brushActive: false
    });
  }

  setOvalActive = (e) => {
    this.setState({
      ovalActive: true,
      lineActive: false,
      brushActive: false,
      rectActive: false
    });
  }

  setRectangleActive = (e) => {
    this.setState({
      rectActive: true,
      ovalActive: false,
      lineActive: false,
      brushActive: false
    });
  }

  processImage = (e) => {
    const imgUrl = this.state.canvas.toDataURL();
    console.log(imgUrl);
  }

  clearCanvas = (e) => {
    
  }

  render () {
    // const lineWidth = this.state.lineWidth;
    // const colorVal = this.state.colorVal;
    // const rectActive = this.state.rectActive;
    // const ovalActive = this.state.ovalActive;
    // const brushActive = this.state.brushActive;
    // const lineActive = this.state.lineActive;
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col md={4}>
              <Panel header="Toolbox">
                <Row>
                  <Col md={6}>
                    <Brush brushSizeChange={this.handleBrushSizeChange} lineWidth={this.state.lineWidth}/>
                  </Col>
                  <Col md={6}>
                    <ColorPicker changeColor={this.handleColorChange} colorVal={this.state.colorVal}/>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md={1}>
                    <Line setLineActive={this.setLineActive} lineActive={this.state.lineActive}/>
                  </Col>
                  <Col md={1}>
                    <Oval setOvalActive={this.setovalActive} ovalActive={this.state.ovalActive}/>
                  </Col>
                  <Col md={1}>
                    <Rectangle setRectActive={this.setRectangleActive} rectActive={this.state.rectActive}/>
                  </Col>
                </Row>
                <Row>
                  <hr />
                  <Col md={12}>
                    <h5>Upload Image</h5>
                    <Button onClick={this.processImage}>Upload Image</Button>
                  </Col>
                </Row>
              </Panel>
            </Col>
            <Col md={8}>
              <canvas
                id="mycanvas"
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
                onMouseMove={this.onMouseMove}
                onMouseOut={this.onMouseUp}
                width="1000"
                height="600"
                ref={(canvas) => this.canvas = canvas}
                />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CanvasContainer;
