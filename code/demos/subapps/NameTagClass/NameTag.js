import React, { PropTypes } from 'react';

class NameTag extends React.Component {
  static propTypes = { name: PropTypes.string };

  componentWillMount() {
    this.setState({ name: this.props.name });
  }

  updateName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <p>
          Hello, my name is {this.state.name}
        </p>
        <p>
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.updateName(e.target.value)}
          />
        </p>
      </div>
    );
  }
}

export default NameTag;
