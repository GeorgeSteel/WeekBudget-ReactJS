import React, { Component } from 'react'

export default class Remaining extends Component {
  render() {
    return (
        <div className="alert alert-success">
            <p>
                Remaining: $ {this.props.remaining} 
            </p>
        </div>
    )
  }
}
