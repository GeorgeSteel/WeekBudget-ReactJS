import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Budget extends Component {
  render() {
    return (
      <div className="alert alert-primary">
        <p>
            Budget: $ {this.props.budget} 
        </p>
      </div>
    )
  }
}

Budget.propTypes = {
  budget: PropTypes.string.isRequired
}