import React from 'react';

export default class App extends React.Component{
        
    constructor() {
        super()
        this.state = {
            people: []
        }
    }
    

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(respPeople => {
            this.setState({people: respPeople.people})
            
        })
    }


    render(){
        
        return (
            
            <div>
               {this.state.people.map((person) => person.name)}
            </div>
        )
        
    }
}