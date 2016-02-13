import { connect } from 'react-redux';
import ContactsApp from '../components/ContactsApp';
import * as a from '../actions';

const ConnectedContactsApp = connect(
  state => ({ contacts: state.contacts }),

  dispatch => ({
    onAddContact: (contact) => dispatch(a.addContact(contact)),
    onEditContact: (id) => dispatch(a.editContact(id)),
  })
)(ContactsApp);

ConnectedContactsApp.displayName = 'ContactsApp';

export default ConnectedContactsApp;
