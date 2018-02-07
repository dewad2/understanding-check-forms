import React from 'react';

const Critters = props => {
  return (
    <div id="critters">
      {
        props.critters.map(critter => {
          return (
            <div key={critter.name}>
              <h1>{critter.name}</h1>
              <img src={critter.image} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Critters;
