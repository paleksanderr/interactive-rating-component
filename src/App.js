
import React, { Component } from 'react';
import FormCard from './Components/FormCard/FormCard';
import ThankYouCard from './Components/ThankYouCard/ThankYouCard';
import './App.css';


class App extends Component {
state = {
      rate: 0,
    };

    ratingHandler = (rate) => {
      console.log("rate z app", rate)
      const ocena = this.state.rate;
      this.setState({ ocena })
    }
  
  render(){
  return (
    <div style={{}} className="App">
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormCard onRate={(rate) => this.ratingHandler(rate)} />
      </header>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThankYouCard onRate={(rate) => this.ratingHandler(rate)} />
      </header>
    </div>
  );
}
}

export default App;
