import React, { Component } from 'react';
//import uniqueId from 'lodash/uniqueId';

import './NewItem.css';
import {addItem} from '../actions/actions';
class NewItem extends Component {
  state = { value: '' };

  handleChange = event => {
    // Do something when the state of this input changes.
    this.setState({value: event.target.value});
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    const { value } = this.state;

    event.preventDefault();

    // // Do something when a new value is submitted.
    // onSubmit({value, id: uniqueId(), packed: false} );
    // // Reset the state of the component.
    // this.setState({value: ''});

	  addItem(value);
  };

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
