import React from 'react'

function PokemonMini(id,name,image,type,key) {
  return (
    <div className='pk-container'>
        <div className='num'>
            <small>?#0{id}</small>
        </div>
        <img src={image} alt={name}/>
        <div className='details'>
            <h3>{name}</h3>
            <small>Type: {type}</small>
        </div>
    </div>
  )
}

export default PokemonMini