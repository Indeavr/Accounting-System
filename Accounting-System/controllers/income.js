const incomeControllerFunc = function (database, modelFactory) {

    $('#submitIncome').click(function () {
        let date = $('#showCallendarIncome')    // TODO: setup html
        let category = $("input[name = 'income-category-item']:checked").val()
        let amount = +$('#addMoney').val()
        let note = $('#addMoneyNote').val()

        let income = modelFactory.createIncome(date, category, amount, note)
        database.incomes.push(income)

        $('#addIncome').hide(200)
    })
}
