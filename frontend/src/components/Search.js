import React, { useState, useEffect } from "react";
import axios from 'axios';

function Search() {

  const [pokemons, setPokemons] = useState({ 
    name: "",
    height: 0,
    weight: 0,
    sprites: "",
    type: "",
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefence: 0,
    speed: 0
  });
  

  useEffect(() => {
    axios.get("/getPokemon").then(response => {
      console.log(response.data.item);
      console.log(response.data.item.height);
      setPokemons({ height: response.data.item.height});
      

    });

  }, []);

  return (
    <div>
      {pokemons.height}
      <h2>a component</h2>
    </div>
  );
}

export default Search;