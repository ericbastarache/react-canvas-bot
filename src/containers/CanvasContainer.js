import React, { Component } from 'react';

import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';
import Line from '../components/Line/Line';
import Oval from '../components/Oval/Oval';
import Rectangle from '../components/Rectangle/Rectangle';
import Brush from '../components/Brush/Brush';
import ColorPicker from '../components/ColorPicker/ColorPicker';
import Eraser from '../components/Eraser/Eraser';

import FontAwesome from 'react-fontawesome';

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

    if(this.state.rectActive === true) {
      let rectContext = this.state.ctx;
      rectContext.fillStyle = this.state.colorVal;
      this.setState({
        ctx: rectContext
      });
      rectContext.fillRect(this.state.lastX, this.state.lastY, 300, 100);
    }

    if(this.state.ovalActive === true) {
      let circleContext = this.state.ctx;
      circleContext.fillStyle = this.state.colorVal;
      this.setState({
        ctx: circleContext
      });
      circleContext.arc(this.state.lastX, this.state.lastY, 100, 0, 2*Math.PI);
      circleContext.fill();
    }
  }

  onMouseUp = (e) => {
    this.setState({
      drawing: false
    });
  }

  onMouseMove = (e) => {
    if(this.state.drawing) {
      if(this.state.brushActive) {
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
      lineActive: !this.state.lineActive,
      rectActive: false,
      ovalActive: false,
      brushActive: false
    });
  }

  setOvalActive = (e) => {
    this.setState({
      ovalActive: !this.state.ovalActive,
      lineActive: false,
      brushActive: false,
      rectActive: false
    });
  }

  setRectangleActive = (e) => {
    this.setState({
      rectActive: !this.state.rectActive,
      ovalActive: false,
      lineActive: false,
      brushActive: false
    });
  }

  setBrushActive = (e) => {
    this.setState({
      brushActive: !this.state.brushActive,
      rectActive: false,
      ovalActive: false,
      lineActive: false
    })
  }

  processImage = (e) => {
    const imgUrl = this.state.canvas.toDataURL();
    console.log(imgUrl);
  }

  eraseCanvas = () => {
    const eraseContext = this.state.ctx;
    eraseContext.clearRect(0, 0, this.state.canvas.width, this.state.canvas.height);

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
                    {this.state.brushActive === true ? <Brush brushSizeChange={this.handleBrushSizeChange} lineWidth={this.state.lineWidth}/> : ''}
                  </Col>
                  <Col md={6}>
                    <ColorPicker changeColor={this.handleColorChange} colorVal={this.state.colorVal}/>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md={2}>
                    <Button value={this.state.brushActive} onClick={this.setBrushActive}><FontAwesome name='paint-brush' /></Button>
                  </Col>
                  <Col md={2}>
                    <Eraser eraseCanvas={this.eraseCanvas}/>
                  </Col>
                  <Col md={2}>
                    <Line setLineActive={this.setLineActive} lineActive={this.state.lineActive}/>
                  </Col>
                  <Col md={2}>
                    <Oval setOvalActive={this.setOvalActive} ovalActive={this.state.ovalActive}/>
                  </Col>
                  <Col md={2}>
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
