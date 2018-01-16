import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addItem, removeItem, toggleItem} from '../actions/items-actions';

import Item from './Item';
import Filter from './Filter';

class Items extends Component {
  state = {
    searchTerm: ''
    // What state does this component have?
  };

  updateSearchTerm = searchTerm => {
    this.setState({searchTerm});
  };

  render() {
    const { title, items, onRemoveItem, onToggleItem } = this.props;
    console.log(this.props);
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        <Filter searchTerm={this.state.searchTerm} onChange={this.updateSearchTerm} />
        {items
          .filter(item =>
            // Hmm… this needs some work.
            item.value.toLowerCase().includes(this.state.searchTerm.toLowerCase()),
          )
          .map(item => (
            <Item
              key={item.id}
              onCheckOff={() => {onToggleItem(item.id)}}
              onRemove={() => {onRemoveItem(item.id)}}
              item={item}
            />
          ))}
      </section>
    );
  }
}

// const mapStateToProps = state => (
//     {
//         items: state.items
//     }
// );

export default connect(null, {onRemoveItem: removeItem, onAddItem: addItem, onToggleItem : toggleItem})(Items);
