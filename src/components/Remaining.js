import React, { Component } from 'react'
import { revisarPresupuesto } from '../helpers';

export default class Remaining extends Component {
    render() {
        const budget = this.props.budget;
        const remaining = this.props.remaining;

        
            return (
                <div className={revisarPresupuesto(budget, remaining)}>
                    <p>
                        Remaining: $ {this.props.remaining} 
                    </p>
                </div>
            )
    }
}
