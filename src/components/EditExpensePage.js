import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    startRemoveExpense = () =>
    {
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/');
    };
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    render()
    {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.startRemoveExpense}>Remove</button>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

const mapDispatchToProps = (dispatch) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    startRemoveExpense: (expenseId) => dispatch(startRemoveExpense({id: expenseId}))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);