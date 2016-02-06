import React, { PropTypes } from 'react';

const NameTag = ({ name, onChange }) => (
  <div>
    <p>
      Hello, my name is {name}
    </p>
    <p>
      <input
        type="text"
        value={name}
        onChange={e => onChange(e.target.value)}
      />
    </p>
  </div>
);

NameTag.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default NameTag;
