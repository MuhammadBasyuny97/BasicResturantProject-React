
import './App.css';
import MainComponent from './components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
//import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from "react-router-dom";
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    {/*  <BrowserRouter>
       <MainComponent/>
     </BrowserRouter> */}
     <MainComponent/>
    
    </div>
  );
}

export default App;
