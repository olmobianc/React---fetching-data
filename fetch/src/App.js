import React from "react"

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      person: {}
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })
    fetch("https://swapi.dev/api/people/1/")
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoading: false,
          person: data
        })
      })
  }


  render() {
    const text = this.state.isLoading ? "Loading.." : this.state.person.name
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <p>Get you favourite Star Wars character!</p>
            <button className="button">Generate</button>
          </div>
          <p>{text}</p>

        </header>
      </div>
    );
  }
}

export default App;
