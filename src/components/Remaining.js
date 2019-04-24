import React, { Component } from 'react'
import { revisarPresupuesto } from '../helpers';
import PropTypes from 'prop-types';

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

Remaining.propTypes = {
    budget: PropTypes.string.isRequired,
    remaining: PropTypes.string.isRequired
}