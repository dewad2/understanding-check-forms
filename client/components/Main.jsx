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
  }

  selectCritters(critterName) {
    axios.get(`/api/${critterName}`)
      .then(res => res.data)
      .then(critters => {
        this.setState({critters})
      })
  }

  render() {
    return (
      <div>
        <div id="header">
          <h1>Gallery of Cute</h1>
        </div>
        <Navbar selectCritters={this.selectCritters} />
        <AddCritter />
        <Critters critters={this.state.critters} />
      </div>
    )
  }
}

