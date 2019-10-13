import React, { Component } from 'react';


class App extends Component {


  render() {
    return "hey"
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
  }

}

export default App
