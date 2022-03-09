import React, { Component } from 'react'

class PersonCard extends Component {
   constructor(props) {
      super(props);
      this.state = {
         lastName: this.props.lastName,
         firstName: this.props.firstName,
         age: this.props.age,
         hairColor: this.props.hairColor
      }
   }

   increaseAge = (e) => {
      this.setState({ age: this.state.age + 1 })
   }

   render() {
      return (
         <div>
            <h2>{ this.state.lastName }, { this.state.firstName }</h2>
            <p>Age: { this.state.age }</p>
            <p>Hair Color: { this.state.hairColor }</p>
            <button onClick={ this.increaseAge }>Birthday Button for { this.state.firstName } { this.state.lastName }</button>
         </div>
      )
   }
}

export default PersonCard;