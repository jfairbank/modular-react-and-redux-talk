import React from 'react';
import { Grid } from 'react-bootstrap';
import ChildrenWithSource from './ChildrenWithSource';

const Body = ({ children }) => (
  <Grid fluid={true}>
    <ChildrenWithSource>{children}</ChildrenWithSource>
  </Grid>
);

export default Body;
