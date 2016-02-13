import React from 'react';
import ContactPropType from '../propTypes/ContactPropType';

const EditContact = ({ contact }) => (
  <div>
    <em>Edit</em>
    {' '}
    {contact.name}
  </div>
);

EditContact.propTypes = {
  contact: ContactPropType.isRequired,
};

export default EditContact;
