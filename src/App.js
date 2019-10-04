// create your App component here
import React from 'react';

export default class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      astro: ''
    }

  }
  
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json)
    .then(astro => {
      this.setState({
        astro: astro
      })
    })
  }

  render() {
    return <div>Hi</div>
  }
}