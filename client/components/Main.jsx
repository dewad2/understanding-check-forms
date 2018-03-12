import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Critters from './Critters.jsx';
import AddCritter from './AddCritter.jsx';
import axios from 'axios';

/*

  Main.jsx is our main parent component for our app. For this tiny application, we will keep all our our state in Main.jsx. Our state should keep track of whether we are wanting to see our dog, cat, or snake critters and the critter data itself! Now we want to add a form that will allow us to create new critters.

  Make a functional component that will render out our form elements. This component should allow users to enter a name and an image url. The critter's type should be the same as the current view. The form component should render only if viewing 'dogs', 'cats', or 'dragons'.

  Take a stab at building out this app! You're given a very simple AddCritter.jsx to start with!

*/

export default class Main extends Component {

  constructor() {
    super();
    this.state = {
      critters: [],
      type: ''
    }
    this.selectCritters = this.selectCritters.bind(this);
    this.createCritter = this.createCritter.bind(this);
  }

  selectCritters(critterName) {
    axios.get(`/api/${critterName}`)            //(the route to get the info from)
      .then(res => res.data)
      .then(critters => {
        this.setState({
          critters,
          type : critterName.slice(0, -1)
        })
      })
  }

  createCritter(event) {                  //equivalent to handleSubmit function
    event.preventDefault()

    const form = event.target.parentNode;     //event.target is the button we clicked. we want the info in its parent, the form element
    const name = form.name.value;
    const image = form.image.value;
    const type = this.state.type;

    form.name.value = '';           //reset the form to be empty
    form.image.value = '';

    const critter = {           //create the object to add to the database
      name,
      image,
      type,
    }


    axios.post('api/critters', critter)    //(where posting to, the object to post)
    .then(res => res.data)
    .then(newCritter => {
      this.setState({
        critters : [newCritter, ...this.state.critters]
      })
    })
     
  }

  render() {
    return (
      <div>
        <div id="header">
          <h1>Gallery of Cute</h1>
        </div>
        <Navbar selectCritters={this.selectCritters} />
        {this.state.type ? <AddCritter createCritter={this.createCritter} /> : null}
        <Critters critters={this.state.critters} />
      </div>
    )
  }
}

