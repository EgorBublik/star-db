import React, { Component } from 'react';

import './error-button.css';

export default class ErrorButton extends Component {

  state = {
    renderError: false
  };

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    const {itemId, setItemDelete} = this.props;

    return (
      <button
        className="error-button btn btn-danger btn-lg"
        onClick={() => setItemDelete(itemId)}>
        Delete
      </button>
    );
  }
}
