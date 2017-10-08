const expensesControllerFunc = function (database, modelFactory) {
    function submitExpense() {
        let date = $('#selectDateExpense-budget').val();  //TODO: setup html
        let category = $('input:radio[name=optradio]:checked').val();
        let amount = +$('#subtractMoney').val();
        let note = $('subtractMoneyNote-budget').val();

        let expense = modelFactory.createExpense(date, category, amount, note)
        database.expenses.push(expense)

        if(database.budget.moneySpent + expense >= database.budget.amount){
            // TODO: alert that you crossed the budget
        }
        else{
            database.budget.moneySpent += expense.amount
            calculateBudget()
            $('#subtractMoney').empty()
        }

        $('#addExpense').hide(200)
    }


    function calculateBudget() {
        let percent = (database.budget.moneySpent * 100) / database.budget.amount

        $('#budget-progress').width(percent + '%' )
    }

    return{
        submitExpense
    }
}
