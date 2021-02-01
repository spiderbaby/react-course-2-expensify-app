import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

//const now = moment();
//console.log(now.format('MMM Do, YYYY'))


export default class ExpenseForm extends React.Component {
//description amount note

    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d+([.]\d{0,2})?$/))
        {
            this.setState(() => ({ amount }));
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({calendarFocused: focused}));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { description, amount, note, createdAt } = this.state;
        if (!description || !amount)
        { 
            this.setState(() => ({error: 'Please provide description and amount.'}));
        }
        else
        {
            // Clear the error
            this.setState(() => ({error: ''}));
            this.props.onSubmit(
                {
                    description,
                    amount: parseFloat(amount, 10) * 100,
                    note,
                    createdAt: createdAt.valueOf()
                }
            );
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>Add expense</button>
                </form>
            </div>
        );
    }
}
