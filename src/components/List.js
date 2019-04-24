import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {
    render() {
        const { money, name } = this.props.expense;

        return (
            <li className="gastos">
                <p>
                    { name }
                    <span className="gasto">${money}</span>
                </p>
            </li>
        )
    }
}

List.propTypes = {
    expense: PropTypes.object.isRequired
}