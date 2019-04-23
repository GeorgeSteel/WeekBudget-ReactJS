import React, { Component } from 'react';

export default class Form extends Component {

    // refs to read inputs
    nameExpenseRef = React.createRef();
    moneyExpenseRef = React.createRef();

    createExpense = (e) => {
        e.preventDefault();

        const expense = {
            name: this.nameExpenseRef.current.value,
            money: this.moneyExpenseRef.current.value
        }

        this.props.addExpense(expense);
        
        e.currentTarget.reset();
    }

    render() {
        return (
            <form onSubmit={ this.createExpense }>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Expense Name</label>
                    <input ref={ this.nameExpenseRef } className="u-full-width" type="text" placeholder="Ej. Transporte" />
                </div>
            
                <div className="campo">
                    <label>Money</label>
                    <input ref={ this.moneyExpenseRef } className="u-full-width" type="text" placeholder="Ej. 300" />
                </div>
            
                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        )
    }
}
