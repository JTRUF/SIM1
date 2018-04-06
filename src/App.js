import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

const baseUrl = '/api/inventory';

class App extends Component {
    constructor(){
      super()

      this.state = {
        inventory_list: []
      };

      this.getInventory = this.getInventory.bind(this);

  }

      componentDidMount() {
        this.getInventory();
      }

      getInventory(){
        axios.get(`${baseUrl}`).then(res => {
          this.setState({inventory_list: res.data})
        })
      }

  render() {
    return (
      <div className="App">
      <Header/>
      <Form/>
      <Dashboard/>
      </div>
    );
  }
}

export default App;
