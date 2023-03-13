import './App.css';
import { PokemonTable } from './PokemonTable/PokemonTable';
import pokedex from './pokedex.json'
import { useEffect, useState} from 'react'
import { PokemonDetails } from './PokemonDetails/PokemonDetails';


function App() {
  const [poekmonDisplay, setPokemonDisplay] = useState([])
  const [chosenPokemon, setChosenPokemon] = useState(null)
  const idCount = pokedex.length

  const setRandomPokemons = () => {
    const randomPokemons = []
    for (let i = 0; i < 5; i++) {
      const num = Math.floor(Math.random() * idCount)
      randomPokemons.push(pokedex[num])
    }
    setPokemonDisplay(randomPokemons)

  }

  const onPokemonSelection = (e, id) => {
    const pokemon = pokedex[id - 1]
    setChosenPokemon(pokemon)
  }

  const onBackClick = () => {
    setChosenPokemon(null)
  }

  useEffect(() => setRandomPokemons, [])
  return (
    <div className="App">
      <header className="App-header">
        Pokemon List
      </header>
      {chosenPokemon ? <PokemonDetails pokemonData={chosenPokemon} onBackClick={onBackClick}/> :
      <PokemonTable pokemonData={poekmonDisplay} onPokemonSelection={onPokemonSelection} setRandomPokemons={setRandomPokemons}/>}
    </div>
  );
}

export default App;
