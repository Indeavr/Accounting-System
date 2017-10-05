$(function () {

    $('#submitExpense').click(function () {
        let date = $('#selectDateExpense-budget').val();  //TODO: setup html
        let category = $('input[optradio]:checked').text();
        let amount = +$('#subtractMoney').val();
        let note = $('subtractMoneyNote-budget').val();

        let expense = modelFactory().createExpense(date, category, amount, note)
        database().expenses.push(expense)

        calculateBudget(expense.amount)

        $('#addExpense').hide(200)
    })

    $('#submitIncome').click(function () {
        let date = $('#showCallendarIncome')    // TODO: setup html
        let category = $("input[name = 'income-category-item']:checked").val()
        let amount = +$('#addMoney').val()
        let note = $('#addMoneyNote').val()

        let income = modelFactory().createIncome(date, category, amount, note)
        database().incomes.push(income)

        $('#addIncome').hide(200)
    })

    function calculateBudget(expense) {
        database().budget.moneyLeft -= expense

        let percent = (database().budget.amount / database().budget.moneyLeft ) * 100

        $('#budget-progress').attr({
            'style': 'width' + percent + '%'
        })
    }

})