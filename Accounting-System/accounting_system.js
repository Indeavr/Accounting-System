$(function () {

    let expenses
    let savingGoals

    //for the initial budget form --> expense form
    $('#submitExpense-budget').on('click', function () {
        expenses = getExpenses()
        $('#add-known-expense').hide(300)
    })

    $('#submit-savings').click(function () {
        savingGoals = getSavings()
        $('#savings-form').hide(300)
    })

    $('#cancelExpenseSubmit-budget').click(function () {
        $('#add-known-expense').hide(600)
    })

    $('#addExpense-btn').click(function () {
        $('#add-known-expense').toggle(200)
    })

    $('#cancelSubmit-savings').click(function () {
        $('#savings-form').hide(600)
    })

    $('#addSavingGoal-btn').click(function () {
        $('#savings-form').toggle(200)
    })


    $('#budget-form-submit').click(function () {

        // alert("Handler for .submit() is called.");

        let salary = $('#salary-buudget').val()
        let payday = $('#payday-budget').val()


        let budget = modelFactory().createBudget(salary, payday, expenses, savingGoals)
        database().budget = budget


        //koleto: some visual functionalities added, when pressing the button
        $(".wrap-budget-form").hide();
        $("#myNavbar").show();
        $("#budget-progressbar").show();
        loadPiechart();
        loadBarchart();
        $("#sidepanel").show(200);
        //koleto end

        console.log(database().budget)
    })

    let getExpenses = function () {
        let type = $("input[name = 'knownExpenseType']:checked").val()
        let category = $("input[name='knownExpenseCategory']:checked").val()
        let amount = $('#subtractMoney-budget').val()
        let note = $('#subtractMoneyNote-budget').val()

        console.log(modelFactory().createKnownExpense(type, category, amount, note))
        return modelFactory().createKnownExpense(type, category, amount, note)
    }

    let getSavings = function () {

        let amount = $('#savings-form-money').val()
        let note = $('#savings-form-note').val()

        return modelFactory().createSavingGoals(amount, note)
    }

    //koleto
    //payday end of the month checkbox
    $("#monthEndDateCheckBox").change(function(){
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
    var $setPayType = $('input:radio[name=knownExpenseType]');
    if ($setPayType.is(":checked") === false ) {
        $setPayType.filter("[value=month]").prop("checked", true);
    }
    
    $setPayType.change(function() {
        let payType = ["Month", "Week", "Daily", "Year"];
        for (let i = 0; i<=payType.length-1; i++) {
            if ($(this).attr("value") === payType[i].toLowerCase()) {
                $("#selectDateExpense-budget-label").text(payType[i]);
                break;
            }
        }
    });
    
    var $setCategory = $('input:radio[name=knownExpenseCategory]');
    if ($setCategory.is(":checked") === false ) {
        $setCategory.filter("[value=miscellaneous]").prop("checked", true);
        $("#selectIncome-budget-label").text("default: Miscellaneous");
    }
    
    $setCategory.change(function() {
        let categories = [
            "Taxes", "Housing", "Food", "Automobile",
            "Insurance", "Debt Repayment", "Entertainment", "Clothing",
            "Savings", "Medical/Dental", "Miscellaneous", "School",
            "Investments", "Childcare", "Other"];

        let $btnLabel = $("#selectIncome-budget-label");
        let $noteField = $("#otherExpenseCategory-budget");
        for (let i = 0; i<=categories.length-1; i++) {
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

    //koleto

})
