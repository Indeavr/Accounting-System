const navbarControllerFunc = function (database, modelFactory) {

    let incomeOn = true;
    let expenseOn = true;

    $('#reloadPage').click(function () {
        location.reload();
    });

    $("#addIncomeBtn").click(function (e) {
        if (incomeOn && expenseOn === false) {
            $("#addIncome").hide(100);
            incomeOn = false;
        } else if (incomeOn === false || expenseOn) {
            $("#addExpense").hide(100);
            expenseOn = false;
            $("#addIncome").show(200);
            incomeOn = true;
        }
    })

    $("#addExpenseBtn").click(function (e) {
        if (expenseOn && incomeOn === false) {
            $("#addExpense").hide(100);
            expenseOn = false;
        } else if (expenseOn === false || incomeOn) {
            $("#addIncome").hide(100);
            incomeOn = false;
            $("#addExpense").show(200);
            expenseOn = true;
        }
    })
}
