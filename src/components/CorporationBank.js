import React, { Component } from 'react'

export default class CorporationBank extends Component {
    render(props) {
        return (
            <div>
                <h4>{this.props.name} has CorporationBank account in {this.props.location}</h4>
            </div>
        )
    }
}
