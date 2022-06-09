import "./App.css";
import AppHeader from "./components/AppHeader";
import PokemonExpand from "./components/PokemonExpand";
import PokemonItem from "./components/PokemonItem";
import pokemons from "./data/pokemons";
import { useState } from "react";
import InputSearch from "./components/InputSearch";

function App() {
  const [selectedPokemon, setselectedPokemon] = useState("");
  const [searchText, setsearchText] = useState("");

  function onPokemonOpenClick(choosePokemon) {
    setselectedPokemon(choosePokemon);
  }

  function onPokemonCloseClick() {
    setselectedPokemon(null);
  }

  // const filteredPokemons = pokemons.filter((pokemon) =>{
  //     return pokemon.name.includes(searchText);
  // });

  const pokemonElements = pokemons
    .filter((pokemon) => {
      return pokemon.name.includes(searchText);
    })
    .map((pokemon, index) => {
      return (
        <PokemonItem
          key={index}
          pokemon={pokemon}
          onClick={onPokemonOpenClick}
        />
      );
    });

  let pokemonExpand = null;
  if (!!selectedPokemon) {
    pokemonExpand = (
      <PokemonExpand
        pokemon={selectedPokemon}
        onbgClick={onPokemonCloseClick}
      />
    );
  }

  return (
    <div className="app">
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
          <InputSearch onValueChange={setsearchText} />
          <div className="app-grid">{pokemonElements}</div>
        </div>
      </section>

      {pokemonExpand}
    </div>
  );
}

export default App;
