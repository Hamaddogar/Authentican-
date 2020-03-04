import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
 import {Provider} from 'react-redux'
 import Signup from '../src/signup/signup';
  import Login from '../src/login/login'
  import Check from '../src/Home/check'
 import { BrowserRouter , Route, Link } from "react-router-dom";
import store from '../src/store/configureStore'

import { PersistGate } from 'redux-persist/integration/react'
 import Home from '../src/Home/Home'
 function App() {
  return (
   
 
      <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
    <BrowserRouter >
      
      
      <Route path="/" exact component={Home} />
      <Route path="/login"  component={Login} />
      <Route path="/check"  component={Check} />


    

      </BrowserRouter>
      </PersistGate>
      </Provider>
  );
}

export default App;
