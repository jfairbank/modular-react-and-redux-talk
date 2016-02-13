import React, { PropTypes } from 'react';
import ContactPropType from '../propTypes/ContactPropType';
import Contact from './Contact';

const ContactList = ({ contacts, onEditContact }) => (
  <ul>
    {contacts.map(contact => (
      <Contact key={contact.id} contact={contact} onEdit={onEditContact}/>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(ContactPropType),
  onEditContact: PropTypes.func,
};

export default ContactList;
