import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import ContactPropType from '../propTypes/ContactPropType';
import ContactList from './ContactList';

const ContactsApp = ({ contacts, onAddContact, onEditContact }) => (
  <div>
    <ContactList contacts={contacts} onEditContact={onEditContact}/>
    <Button
      bsStyle="primary"
      onClick={() => onAddContact({ name: 'New Contact' })}
    >
      Add
    </Button>
  </div>
);

ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(ContactPropType),
  onAddContact: PropTypes.func,
  onEditContact: PropTypes.func,
};

export default ContactsApp;
