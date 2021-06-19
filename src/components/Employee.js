import React, { Component } from 'react'

export default class Employee extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:"Kalyan",
             employees:[
                 {name:"Aditya"},
                 {name:"Sasi"}
             ]
        }
    }
    
    render() {
        setTimeout(() => 
        this.setState({name:"KalyanPaladugu"})
    , 5000);
        return (
            <div>
                {this.state.name}
               {this.state.employees[0].name}
            </div>
        )
    }
}
