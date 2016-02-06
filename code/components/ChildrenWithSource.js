import React from 'react';
import Highlight from 'react-highlight';
import { Row, Col, Tabs, Tab } from 'react-bootstrap';
import getComponentSource from '../utils/getComponentSource';

export default function ChildrenWithSource({ children }) {
  const source = getComponentSource(children);

  if (!source) {
    return children;
  }

  return (
    <Row>
      <Col xs={12} sm={7}>
        <Tabs defaultActiveKey={1}>
          {source.map(([name, contents], i) => (
            <Tab key={name} title={name} eventKey={i + 1}>
              <Highlight className="javascript">
                {contents}
              </Highlight>
            </Tab>
          ))}
        </Tabs>
      </Col>

      <Col xs={12} sm={5}>
        {children}
      </Col>
    </Row>
  );
}
