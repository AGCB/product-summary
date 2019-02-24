import React, { Component } from 'react';
import './App.css';
//state management
import store from './store'
import { Provider } from 'react-redux'
//components
import Pricing from './components/Pricing'
import PickupModal from './components/PickupModal';
//
//
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <h1>product summary</h1>
        <Pricing/>
        <PickupModal/>
      </div>
      </Provider>
    )
  }
}

export default App;
