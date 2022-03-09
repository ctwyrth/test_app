import React, { Component } from 'react'

export default class Message extends Component {
   constructor(props){
      super(props);
      this.state = {
         message: "Welcome to the site!",
         button: "Leave"
      }
   }

   logInOut = (e) => {
      if (this.state.button === "Leave") {
         this.setState({ button: "Return" });
         this.setState({ message: "Goodbye Friend." });
      } else {
         this.setState({ button: "Leave" });
         this.setState({ message: "Welcome, User!"})
      }
   }

   render() {
      return (
         <div>
            <h1>{this.state.message}</h1>
            <button onClick={ this.logInOut }>{this.state.button}</button>
         </div>
      )
   }
}
