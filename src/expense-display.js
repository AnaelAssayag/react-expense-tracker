import React, { Component } from 'react';
import Expense from './expense'
// import './App.js';

class ExpenseDisplay extends Component {

    renderExpenses() {
        return this.props.expenses.map((expense, index) => <Expense key={index}{...expense}/>);



    }

    render() {
        return (
             <ul>
                {this.renderExpenses()}
            </ul>
        );
    }
}

export default ExpenseDisplay;