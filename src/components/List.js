import React, { Component } from 'react'

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
