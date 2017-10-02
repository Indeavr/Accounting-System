function budget() {
    'use strict'

    let salary = 0
    let payday = undefined
    let expenses = []
    let savingGoals = {}

    $(document).ready(function () {
        $('#setBudgetForm').submit(function () {
            let $input = $('#setBudgetForm :input')

            let values = {}

            $input.forEach(function () {
                values[this.name] = $(this).val()
            })

            setInitialBudget(values);
        })
    });

    let setInitialBudget = function (values) {
        //verify
        let salaryInput = values[0]
        let paydayInput = values[1]
        let expensesInput = values[2]
        let savingGoalsInput = values[3]

        VerifySalary(salaryInput)
        VerifyPayday(paydayInput)
        VerifyExpenses(expensesInput)
        VerifySavingGoals(savingGoalsInput)

        salary = salaryInput
        payday = paydayInput
        expenses = expensesInput
        savingGoals = savingGoalsInput


    }

    return {
        salary,
        payday,
        expenses,
        savingGoals
    }
}