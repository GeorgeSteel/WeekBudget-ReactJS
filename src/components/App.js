import React, { Component } from 'react'
import '../css/App.css';
import Header from './Header';
import Form from './Form';
import Expenses from './Expenses';
import ControlBudget from './ControlBudget';
import { validarPresupuesto, revisarPresupuesto } from '../helpers';

export default class App extends Component {
  state = {
    budget: '',
    remaining: '',
    expenses: {}
  }

  componentDidMount () {
    this.getBudget();
  }

  getBudget = () => {
    let budget = prompt('What is the budget?');
    let result = validarPresupuesto(budget);

    if (result) {
      this.setState({
        budget,
        remaining: budget
      });
    } else {
      this.getBudget();
    }
  }

  addExpense = (expense) => {
    const expenses = {...this.state.expenses};

    expenses[`expense${Date.now()}`] = expense;
    
    this.setState({
      expenses
    });    
  }

  render() {
    return (
      <div className="App Container">
        <Header
          title="Week Budget"
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Form
                addExpense={ this.addExpense }
              />
            </div>
            <div className="one-half column">
              <Expenses
                expenses={ this.state.expenses }
              />
              <ControlBudget
                budget={ this.state.budget }
                remaining= { this.state.remaining }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

