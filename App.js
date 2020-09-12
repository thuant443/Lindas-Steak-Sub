import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <div>
      <div className="content">
        <Route path="/products" component={Product}></Route>
      </div>
    </div>
  );
}

export default App;
