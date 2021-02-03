import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export class ExpensesSummary extends React.Component {

    render() {
        return (
            <div>
            <h1>
            Viewing {this.props.expenseCount} expense{this.props.expenseCount > 1 ? 's' : ''} totaling {numeral(this.props.expensesTotal/100).format('$0,0.00')}
            </h1>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    const visible_expenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visible_expenses.length,
        expensesTotal: getExpensesTotal(visible_expenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);
