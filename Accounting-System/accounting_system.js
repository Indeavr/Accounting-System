$(function () {

    $('#continueToPartTwo').click(function () {
        container.formController.continueToPartTwo()
    })

    $('#addExpense-btn').click(function () {
        $('#add-known-expense').toggle(200)
    })

    $('#submitExpense-budget').click(function () {
        container.formController.submitExpenseBudget()
    })

    $('#cancelExpenseSubmit-budget').click(function () {
        $('#add-known-expense').hide(600)
    })


    $('#addSavingGoal-btn').click(function () {
        $('#savings-form').toggle(200)
    })

    $('#submit-savings').click(function () {
        container.formController.submitSavings()
    })

    $('#cancelSubmit-savings').click(function () {
        $('#savings-form').hide(600)
    })


    $('#budget-form-submit').click(function () {
        container.formController.submitBudget()
    })

    // container.incomeController()
    // container.expensesController()
    // container.navbarController()
})