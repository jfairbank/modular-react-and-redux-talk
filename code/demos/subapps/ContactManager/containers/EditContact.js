import find from 'lodash/find';
import { connect } from 'react-redux';
import EditContact from '../components/EditContact';

const ConnectedEditContact = connect(
  state => ({ contacts: state.contacts }),
  null,
  (stateProps, dispatchProps, ownProps) => ({
    contact: find(stateProps.contacts, { id: Number(ownProps.params.id) }),
  })
)(EditContact);

ConnectedEditContact.displayName = 'EditContact';

export default ConnectedEditContact;
