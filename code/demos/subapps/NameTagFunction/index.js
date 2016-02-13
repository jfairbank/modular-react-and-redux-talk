import React from 'react';
import NameTag from './NameTag';

class NameTagFunctionApp extends React.Component {
  state = { name: 'John Doe' };

  updateName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <NameTag
        name={this.state.name}
        onChange={this.updateName.bind(this)}
      />
    );
  }
}

export default NameTagFunctionApp;
