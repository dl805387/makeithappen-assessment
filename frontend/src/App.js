import './App.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Search from './components/Search';

function App() {

  useEffect(() => {
    axios.get("/").then(response => {
    });
  }, []);

  return (
    <div className="App">
      <form >
        <button className="button is-primary is-outlined" type="submit">Click to display random Pokemons!</button>
      </form> 

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
