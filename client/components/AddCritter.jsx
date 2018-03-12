import React, {Component} from 'react';

const AddCritter = props => {

  return (
      <form>
        <label htmlFor="name">Name</label>
        <input name="name"/>
        <button onClick={props.createCritter}>Add your critter!</button>
        <label htmlFor="image">Image Url</label>
        <input name="image" />
      </form>
    )
}


export default AddCritter;