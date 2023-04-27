import React, { useEffect, useState } from 'react'
// import './Pokemon.css';
import PokemonMini from './PokemonMini';

function Pokemon() {

    const [allPokemon, setAllPokemon] = useState([]);
    const [isWait, setISwait] = useState(false);
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon')

    const getPokemon = async () => {
       const result = await fetch(loadMore)
       const data =  await result.json()
       setLoadMore(data.next)

    const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
          return res.json();
        })
      );
      
     setAllPokemon((currentList) => [...currentList, ...pokemonData]);
   
    };


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
        .then((res)=> res.json())
        .then((result) =>{
          setAllPokemon(result)
           setISwait(true)
          console.log(result)})
          
    },[])

  return (
    <div className='container'>
        <h1>Pokemon</h1>
        <div className='pokemon-container'>
            
            <div className='all-container'>
             
            {allPokemon.length > 0 && allPokemon.map((pokemon,index) => <PokemonMini id={pokemon.id} name= {pokemon.name} image ={pokemon.sprites.other.dream_world.front_default}  type={pokemon.types[0].type.name} key={index}/> )}
             
            </div>
            <button  className='load' onClick={() => getPokemon()}>Load More</button>
        </div>
    </div>
  )
}

export default Pokemon;