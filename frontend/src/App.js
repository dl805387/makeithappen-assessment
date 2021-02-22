import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Search from './components/Search';

function App() {

  return (
    <div className="App">
      <div class="columns">
        <div className="column">
          <Search />  
        </div> 
        <div className="column">
          <Search />  
        </div> 
        <div className="column">
          <Search />  
        </div> 
        <div className="column">
          <Search />  
        </div>  
      </div>
    </div>
  );
}

export default App;
