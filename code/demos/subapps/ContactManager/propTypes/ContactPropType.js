import { PropTypes } from 'react';

const ContactPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
});

export default ContactPropType;
