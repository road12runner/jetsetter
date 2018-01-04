import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';
import Item from './Item';

const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  state = {
    items: defaultState
    // Set the initial state,
  };

  addItem = (item) => {
    this.setState({items: [item, ...this.state.items]});
  };

  removeItem = (id) => {
  	console.log('remove id', id);
  	this.setState({items: this.state.items.filter( item => item.id !== id)});
  };

  toggleItem = (itemToToggle) => {
  	const items = this.state.items.map( item => {
  		if (item.id !== itemToToggle) return item;
  		return {...item,  packed : !item.packed};
	  });

  	this.setState({items});
  };
  // How are we going to manipualte the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?


	markAllAsUnpacked = ()=> {
		const items = this.state.items.map( item => {
			return {...item,  packed : false};
		});

		this.setState({items});

	};

  render() {
    // Get the items from state

    const unpackedItems = this.state.items.filter(item =>  item.packed === false);
	  const packedItems = this.state.items.filter(item =>  item.packed === true);
    console.log(unpackedItems);


    return (
      <div className="Application">
        <NewItem onSubmit={this.addItem}/>
        <CountDown />
        <Items title="Unpacked Items" items={unpackedItems} onRemove={this.removeItem} onToggle={this.toggleItem}/>
        <Items title="Packed Items" items={packedItems} onRemove={this.removeItem} onToggle={this.toggleItem}/>
        <button className="button full-width" onClick={this.markAllAsUnpacked}>Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
