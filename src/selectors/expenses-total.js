// Sum the amounts of an array of expenses

export default (expenses) => {
    return expenses
        .map(expense => expense.amount)
        .reduce(
            (accumulator, amount) => accumulator + amount, 0
        );
    
};