import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBUilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Layout>
        <BurgerBUilder>
        
        </BurgerBUilder>
      </Layout>
    </div>
  );
  }
}

export default App;
