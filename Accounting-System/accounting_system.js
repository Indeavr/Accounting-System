$(function () {

    let expenses
    let savingGoals

    $('#submitExpense-budget').on('click', function () {
        expenses = getExpenses()
    })

    $('#submit-savings').click(function () {
        savingGoals = getSavings()
    })

    $('#budget-form-submit').click(function () {

        // alert("Handler for .submit() is called.");

        let salary = $('#salary-buudget').val()
        let payday = $('#payday-budget').val()


        let budget = modelFactory().createBudget(salary, payday, expenses, savingGoals)
        database().budget = budget

        console.log(database().budget)
    })

    let getExpenses = function () {
        let type = $('#selectDateExpense-budget').val()
        let category = $('#selectIncome-budget').val()
        let amount = $('#subtractMoney-budget').val()
        let note = $('#subtractMoneyNote-budget').val()

        //console.log(modelFactory().createKnownExpense(type, category, amount, note))
        return modelFactory().createKnownExpense(type, category, amount, note)
    }

    let getSavings = function () {

        let amount = $('#savings-form-money').val()
        let note = $('#savings-form-note').val()

        return modelFactory().createSavingGoals(amount, note)
    }

})
