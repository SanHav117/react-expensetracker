import React from 'react';

import '../styles/Style.css';
import ExpenseList from './ExpenseList';
import AddExpense from './AddExpense';

export default class Expenses extends React.Component{
    constructor() {
        super();
        this.state = {
            show: "form"
        }
    }

    handleDisplay = (value) => {
        this.setState({show: value})
    }

    render() {
        const {show} = this.state;
        return(
            <div class="ExpenseSection" >
                <div class="ExpSectionDefault">
                <a><button class="expenseoption" onClick={() => this.handleDisplay('list')}>Show Expenses</button></a>
                <a><button class="expenseoption" onClick={() => this.handleDisplay('form')}>Add Expense</button></a>
                </div>
    
                {
                    show === 'list' ? <ExpenseList /> : null
                }
                
                {
                    show === 'form' ? <AddExpense /> : null
                }
                
                
            </div>
        )
    }
}