import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import Brush from '../components/Brush/Brush';
import Rectangle from '../components/Rectangle/Rectangle';
import Oval from '../components/Oval/Oval';
import Line from '../components/Line/Line';

class ToolsContainer extends Component {
  render () {
    return (
      <Panel header="Toolbox">
        <div>
          <Brush />
          <Rectangle />
          <Oval />
          <Line />
        </div>
      </Panel>
    );
  }
}

export default ToolsContainer;
