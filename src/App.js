import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
 import Signup from '../src/signup/signup';
  import Login from '../src/login/login'
  import Check from '../src/Home/check'
 import { BrowserRouter , Route, Link } from "react-router-dom";

 import Home from '../src/Home/Home'

 function App() {
  return (
   
    
          <BrowserRouter >
      
      <Route path="/" exact component={Home} />
      <Route path="/login"  component={Login} />
      <Route path="/check"  component={Check} />


    

      </BrowserRouter>

   
  );
}

export default App;
