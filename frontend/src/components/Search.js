import React, { useState, useEffect } from "react";
import axios from 'axios';

function Search() {

  // This object state contains the data for each Pokemon
  const [pokemon, setPokemon] = useState({ 
    name: "",
    height: 0,
    weight: 0,
    type: [],
    sprite: "",
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefence: 0,
    speed: 0
  });
  
  // Calls the backend to get API data
  useEffect(() => {
    axios.get("/getPokemon").then(response => {
      setPokemon({ 
        name: response.data.item.name,
        height: response.data.item.height,
        weight: response.data.item.weight,
        type: response.data.item.types,
        sprite: response.data.item.sprites.front_default,
        hp: response.data.item.stats[0].base_stat,
        attack: response.data.item.stats[1].base_stat,
        defense: response.data.item.stats[2].base_stat,
        specialAttack: response.data.item.stats[3].base_stat,
        specialDefence: response.data.item.stats[4].base_stat,
        speed: response.data.item.stats[5].base_stat
      });
    });
  }, []);

  // Loops through all the types to return a string
  const getType = () => {
    let str = "";
    pokemon.type.map(x => {
      if (str !== "") {
        str += ", ";
      }
      str += x.type.name;
    })
    return str;
  }

  return (
    <div>

      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            {pokemon.name}
          </p>
        </header>

        <div className="card-image">
          <figure className="image is-4by3">
            <img src={pokemon.sprite} alt="Placeholder image"/>
          </figure>
        </div>

        <div className="card-content">
          <div className="content">

            <div className="columns">
              <div className="column">
                <p>Type: {getType()}</p>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
              </div>
              <div className="column">
                <table>
                  <thead>
                    <tr>
                      <th>Stats</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>HP: {pokemon.hp}</td>
                    </tr>
                    <tr>
                      <td>Attack: {pokemon.attack}</td>
                    </tr>
                    <tr>
                      <td>Defense: {pokemon.defense}</td>
                    </tr>
                    <tr>
                      <td>Sp. Atk: {pokemon.specialAttack}</td>
                    </tr>
                    <tr>
                      <td>Sp. Def: {pokemon.specialDefence}</td>
                    </tr>
                    <tr>
                      <td>Speed: {pokemon.speed}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>  
      </div>

    </div>
  );
}

export default Search;