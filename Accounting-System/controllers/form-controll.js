const formControllerFunc = function (database, modelFactory) {
    let salary
    let expenses = []
    let savingGoals = []
    let sumOfExpenses = 0
    let sumOfSavings = 0


    function continueToPartTwo() {
        salary = $('#salary-budget').val()
        let payday = +$('#payday-budget').val()
        database.currency = $('#selectbasic').find(':selected').val()

        $(`.${database.currency}`).attr('class', `currency-item ${database.currency} disabled`)

        console.log(database.currency)

        let regex = new RegExp('[0-9]+')

        let salaryTrimed = +(function trimStart(character, string) {
            let startIndex = 0;

            while (string[startIndex] === character) {
                startIndex++;
            }

            return string.substr(startIndex);
        }(0, salary))

        if (salaryTrimed > 0 && regex.test(salaryTrimed)) {
            let checked = $('#monthEndDateCheckBox').is(':checked')

            if (checked) {
                payday = 30
            }

            if (typeof payday === "number" && payday > 0 && payday < 31) {
                $('#salary-span').text(salaryTrimed)
                updateProgress()

                //console.log('TRIMED: ' + `${typeof salaryTrimed}`)
                let budget = modelFactory.createBudget(salaryTrimed, payday, [], {})
                database.budget = budget

                // console.log(database.budget)
                // console.log(database.budget.moneySpent)
                // console.log(typeof database.budget.moneySpent)


                $(".partOne").hide(100);
                $(".partTwo").show()
            }
            else {
                alert('Please enter a valida day of the month')
            }
        }
        else {
            alert('Salary must be a number!')
        }
    }


    function submitExpenseBudget() {
        let expense = (function getExpense() {
            let type = $("input[name = 'knownExpenseType']:checked").val()
            let category = $("input[name='knownExpenseCategory']:checked").val()
            let amount = +$('#subtractMoney-budget').val()
            let note = $('#subtractMoneyNote-budget').val()

            switch (type) {
                case 'Week':
                    amount *= 4
                    break
                case 'Daily':
                    amount *= 30
                    break
                case 'Year':
                    amount /= 12
                    break
            }
            console.log(modelFactory.createKnownExpense(type, category, amount, note))
            return modelFactory.createKnownExpense(type, category, amount, note)
        }())

        sumOfExpenses += expense.amount

        expenses.push(expense)


        let validAmount = checkAmountOfSalaryLeft(sumOfSavings, expense)

        if (validAmount) {
            updateExpenseInfoVizualisation()
            $('#add-known-expense').hide(300)
        }

        function updateExpenseInfoVizualisation() {
            $('#expenses-span').text(sumOfExpenses)
            $('.counter').text(expenses.length)
            $('#subtractMoneyNote-budget').empty()
            $('#subtractMoney-budget').empty()
        }
    }

    function submitSavings() {
        let saving = (function getSaving() {

            let amount = +$('#savings-form-money').val()
            let note = $('#savings-form-note').val()

            return modelFactory.createSavingGoals(amount, note)
        }())

        sumOfSavings += saving.amount

        savingGoals.push(saving)

        let validAmount = checkAmountOfSalaryLeft(sumOfSavings, saving)

        if (validAmount) {
            $('.counter-savings').text(sumOfSavings)
            $('#savings-form').hide(300)
        }
        console.log(savingGoals)
    }


    function checkAmountOfSalaryLeft(sumOf, expenseOrSaving) {
        if (sumOfSavings + sumOfExpenses > salary) {
            sumOf -= expenseOrSaving.amount
            alert('You reached the limit of your expenses!')
            return false
        }
        else {
            return true
        }
    }

    function updateProgress() {
        function getPercentOfProgress() {
            return ((sumOfExpenses + sumOfSavings) / salary) * 100
        }

        $('#expense-progress').attr({
            'style': 'width:' + getPercentOfProgress() + '%'
        })
    }


    function submitBudget() {

        let initialBudget = salary - sumOfExpenses - sumOfSavings

        console.log(initialBudget)
        console.log(typeof initialBudget)

        database.budget.knownExpenses = expenses
        database.expenses.push(expenses)
        database.budget.savingGoals = savingGoals
        database.budget.amount = initialBudget
        database.budget.moneySpent = 0


        $("#navbarBtnRight").removeAttr("hidden");
        $(".wrap-budget-form").hide();
        $("#myNavbar").attr("class", "navbar-collapse collapse").removeAttr("hidden");

        $("#sidepanel").show(200);
        $('#budget-progressbar').show()
        $('.main-content').show()

        //console.log(database.budget.salary)
        // console.log(database.budget)
        // console.log(database.expenses)
        // console.log(database.budget.knownExpenses)
        // console.log(database.budget.savingGoals)
        // console.log(database.budget.amount)
        // console.log(database.budget.moneySpent)
    }

    //koleto
    //payday end of the month checkbox
    $("#monthEndDateCheckBox").change(function () {
        let $payDayForm = $("#payday-budget");
        if ($payDayForm.prop("disabled") === true) {
            $payDayForm.prop("disabled", false);
            $payDayForm.attr("placeholder", "Specify date of the month");
        } else {
            $payDayForm.val("");
            $payDayForm.attr("placeholder", "End of the month");
            $payDayForm.prop("disabled", true);
        }
    })

    //add known expense - default radio buttons behaviours sat
    let $setPayType = $('input:radio[name=knownExpenseType]');
    if ($setPayType.is(":checked") === false) {
        $setPayType.filter("[value=month]").prop("checked", true);
    }

    $setPayType.change(function () {
        let payType = ["Month", "Week", "Daily", "Year"];
        for (let i = 0; i <= payType.length - 1; i++) {
            if ($(this).attr("value") === payType[i].toLowerCase()) {
                $("#selectDateExpense-budget-label").text(payType[i]);
                break;
            }
        }
    });

    let $setCategory = $('input:radio[name=knownExpenseCategory]');
    if ($setCategory.is(":checked") === false) {
        $setCategory.filter("[value=miscellaneous]").prop("checked", true);
        $("#selectIncome-budget-label").text("default: Miscellaneous");
    }

    $setCategory.change(function () {
        let categories = [
            "Taxes", "Housing", "Food", "Automobile",
            "Insurance", "Debt Repayment", "Entertainment", "Clothing",
            "Savings", "Medical/Dental", "Miscellaneous", "School",
            "Investments", "Childcare", "Other"];

        let $btnLabel = $("#selectIncome-budget-label");
        let $noteField = $("#otherExpenseCategory-budget");
        for (let i = 0; i <= categories.length - 1; i++) {
            if ($(this).attr("value") === categories[i].toLowerCase()) {
                $btnLabel.text(categories[i]);
                break;
            } else if ($(this).attr("value") === "debt") {
                $btnLabel.text(categories[5]);
                break;
            } else if ($(this).attr("value") === "medical") {
                $btnLabel.text(categories[9]);
                break;
            }
        }

        if ($(this).attr("value") === "other") {
            $noteField.prop("disabled", false);
        } else {
            $noteField.prop("disabled", true);
        }
    });

    return {
        continueToPartTwo,
        submitExpenseBudget,
        updateProgress,
        submitSavings,
        submitBudget
    }
}

