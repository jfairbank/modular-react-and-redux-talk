import React from 'react';
import Header from './Header';
import Body from './Body';

const MainApp = ({ children }) => (
  <div>
    <Header/>
    <Body>{children}</Body>
  </div>
);

export default MainApp;
