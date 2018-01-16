import React, { Component } from 'react';
import './Item.css';
import {removeItem, toggleItem} from '../actions/actions';
class Item extends Component {

  handleChange = () => {
    toggleItem(this.props.item);
  };

  handleRemove = () => {
  	console.log('handle remove', this.props.item);
    removeItem(this.props.item)
  };


  render() {
    const { item, onRemove, onCheckOff } = this.props;
    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={this.handleChange}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={this.handleRemove}>
          Remove
        </button>
      </article>
    );
  }
}

export default Item;
