import React, { Component } from 'react';
import './App.css';
//state management
import store from './store'
import { Provider } from 'react-redux'
//components
import UserInput from './components/UserInput'
import Counter from './components/Counter'
//
//
class App extends Component {
  render() {
    return (
      <Provider store={store} >
      <div className="App">
        <h1>react/redux </h1>
        <UserInput />
        <Counter value = {store.getState().counter}/>
      </div>
      </Provider>
    );
  }
}

export default App;
