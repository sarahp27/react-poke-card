import React from 'react'

function PokemonMini(props) {
  return (
    <div className='container'>
        <div className='num'>
            <small>?#0{props.id}</small>
        </div>
        <img src={props.image} alt={props.name}/>
        <div className='details'>
            <h3>{props.name}</h3>
            <small>Type: {props.type}</small>
        </div>
    </div>
  )
}

export default PokemonMini