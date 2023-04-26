import React, { useEffect, useState } from 'react'
import './Pokemon.css';

function Pokemon() {

    const [allPokemon, setAllPokemon] = useState([]);
    const [isWait, setISwait] = useState(false);
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon')

    const getPokemon = async () => {
       const result = await fetch(loadMore)
       const data =  await result.json()
       setLoadMore(data.next)
      
       function createPokemonsObject(res){
        // res(async (pokemon) => {
        //      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        //     .then(pokemon.)result.json()) 

        //     // setAllPokemon(currentList => [...currentList,data])
        //     setAllPokemon(data);
        //     await console.log(allPokemon)
        // });
       } 
       createPokemonsObject(data.res)
    } 

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
        .then((res)=> res.json())
        .then(result =>{
          setAllPokemon(result)
          setISwait(true)
          console.log(result)})
    },[])

  return (
    <div className='container'>
        <h1>Pokemon</h1>
        <div className='pokemon'>
            <div className='content'>
            {allPokemon.map (pokemon => <li>{pokemon.name}</li> )}
            </div>
            <button  className='load'>Load More</button>
        </div>
    </div>
  )
}

export default Pokemon;