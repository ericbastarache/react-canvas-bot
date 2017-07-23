import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import CanvasContainer from './CanvasContainer';
import ToolsContainer from './ToolsContainer';

class LayoutContainer extends Component {
  render () {
    return (
      <Grid fluid>
        <Row>
          <Col md={4}>
            <ToolsContainer />
          </Col>
          <Col md={8}>
            <CanvasContainer />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default LayoutContainer;
