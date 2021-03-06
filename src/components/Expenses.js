import React, { Component } from 'react'
import PropTypes from 'prop-types';
import List from './List';

export default class Expenses extends Component {
  render() {
    return (
      <div className="gastos-realizados">
        <h2>Expenses</h2>
        {Object.keys(this.props.expenses).map(key => (
            <List
                key={ key }
                expense={ this.props.expenses[key] }
            />
        ))}
      </div>
    )
  }
}

Expenses.propTypes = {
  expenses: PropTypes.object.isRequired
}