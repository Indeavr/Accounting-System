const expensesControllerFunc = function (database, modelFactory) {
    $('#submitExpense').click(function () {
        let date = $('#selectDateExpense-budget').val();  //TODO: setup html
        let category = $('input[optradio]:checked').text();
        let amount = +$('#subtractMoney').val();
        let note = $('subtractMoneyNote-budget').val();

        let expense = modelFactory().createExpense(date, category, amount, note)
        database.expenses.push(expense)

        calculateBudget(expense.amount)

        $('#addExpense').hide(200)
    })


    function calculateBudget(expense) {
        database.budget.moneyLeft -= expense

        let percent = (database.budget.amount / database.budget.moneyLeft ) * 100

        $('#budget-progress').attr({
            'style': 'width' + percent + '%'
        })
    }
}
