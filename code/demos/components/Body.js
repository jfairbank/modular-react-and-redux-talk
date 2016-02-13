import React from 'react';
import { Grid } from 'react-bootstrap';
import ChildrenWithSource from './ChildrenWithSource';

const Body = ({ children }) => (
  <Grid fluid>
    <ChildrenWithSource>{children}</ChildrenWithSource>
  </Grid>
);

export default Body;
