import React, { useState, useEffect } from "react";
import axios from 'axios';


function Search() {

  const [pokemon, setPokemon] = useState({ 
    name: "",
    height: 0,
    weight: 0,
    type: "",
    sprite: "",
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefence: 0,
    speed: 0
  });
  
  useEffect(() => {
    axios.get("/getPokemon").then(response => {
      setPokemon({ 
        name: response.data.item.name,
        height: response.data.item.height,
        weight: response.data.item.weight,
        type: response.data.item.types[0].type.name,
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

  return (
    <div>

      <div className="card">
        <header class="card-header">
          <p class="card-header-title">
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

            <div class="columns">
              <div class="column">
                <p>Type: {pokemon.type}</p>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
              </div>
              <div class="column">
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