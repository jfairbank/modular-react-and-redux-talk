import React from 'react';
import { Link } from 'react-router';
import ContactPropType from '../propTypes/ContactPropType';

const Contact = ({ contact }) => (
  contact.editing ?
    <div>
      <em>Editing:</em>
      {' '}
      {contact.name}
    </div> :

    <div>
      {contact.name}
      {' '}
      <Link to={`/ContactManager/contact/${contact.id}/edit`}>
        Edit
      </Link>
    </div>
);

Contact.propTypes = {
  contact: ContactPropType,
};

export default Contact;
