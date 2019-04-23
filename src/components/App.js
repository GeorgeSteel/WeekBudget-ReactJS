import React, { Component } from 'react'
import '../css/App.css';
import Header from './Header';
import Form from './Form';


export default class App extends Component {
  state = {
    budget: '',
    remaining: '',
    expenses: {}
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
              2
            </div>
          </div>
        </div>
      </div>
    )
  }
}

