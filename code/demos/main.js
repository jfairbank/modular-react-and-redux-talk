import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MainApp from './components/MainApp';
import Home from './components/Home';
import NameTagClassApp from './subapps/NameTagClass';
import NameTagFunctionApp from './subapps/NameTagFunction';
import ContactManager, {
  ContactsApp,
  EditContact,
} from './subapps/ContactManager';

render(
  <Router history={browserHistory}>
    <Route path="/" component={MainApp}>
      <IndexRoute component={Home}/>
      <Route path="NameTagClass" component={NameTagClassApp}/>
      <Route path="NameTagFunction" component={NameTagFunctionApp}/>
      <Route path="ContactManager" component={ContactManager}>
        <IndexRoute component={ContactsApp}/>
        <Route path="contact/:id/edit" component={EditContact}/>
      </Route>
    </Route>
  </Router>,

  document.getElementById('container')
);
// <Route path="/contact/:id/edit" component={EditContact}/>
