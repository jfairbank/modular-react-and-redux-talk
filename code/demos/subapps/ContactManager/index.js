import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import ContactsApp from './containers/ContactsApp';
import EditContact from './containers/EditContact';

const store = createStore(reducer);

const ContactManager = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default ContactManager;

export { ContactsApp, EditContact };
