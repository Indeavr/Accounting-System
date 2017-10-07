const currencyHandlerFunc = function (database) {

    function generateCurrencyChangeMenu() {

        // let $listItem = $('<li  id="currency"></li>')
        // let $divDropDown = $('<div class="dropdown"></div>')
        // let $ulDrops = $('<ul id="currency-dropdown" class="dropdown-menu"></ul>')
        //
        // $ulDrops.append('<li><a href="#" class="currency-item">EUR</a></li>')
        // $ulDrops.append('<li><a href="#" class="currency-item">BGN</a></li>')
        // $ulDrops.append('<li ><a href="#" class="currency-item">USD</a></li>')
        // $ulDrops.append('<li ><a href="#" class="currency-item">GBP</a></li>')
        //
        // $divDropDown.append('<button class="btn btn-sm btn-primary dropdown-toggle" type="button" data-toggle="dropdown"> Change Currency<span class="caret"></span></button>')
        // $divDropDown.append($ulDrops)
        // $listItem.append($divDropDown)
        //
        // $('#main-nav-ul').append($listItem)
    }

    function convertToBaseEUR(data) {
        database.budget.amount /= data
        database.budget.moneyLeft /= data

        for(let i = 0; i < database.budget.knownExpenses.length; i++){
            database.budget.knownExpenses[i].amount /= data
        }

        for (let i = 0; i < database.expenses.length; i++){
            database.expenses[i].amount /= data
        }

        for (let i = 0; i < database.incomes.length; i++){
            database.incomes[i].amount /= data
        }

        console.log(database.budget.knownExpenses[0].amount)
        //console.log(database.budget.amount)
    }

    function getCurrentCurrency() {
        //console.log(database.budget.amount)
        console.log(database.budget.knownExpenses[0].amount)
        return database.currency
    }

    function updateCurrency(data) {
        database.budget.amount *= data
        database.budget.moneyLeft *= data

        for(let i = 0; i < database.budget.knownExpenses.length; i++){
            database.budget.knownExpenses[i].amount *= data
        }


        for (let i = 0; i < database.expenses.length; i++){
            database.expenses[i].amount *= data
        }

        for (let i = 0; i < database.incomes.length; i++){
            database.incomes[i].amount *= data
        }
        console.log(database.budget.knownExpenses[0].amount)
        //console.log(database.budget.amount)
    }

    function updateDatabase(newCurrency) {
        database.currency = newCurrency
    }

    return {
        generateCurrencyChangeMenu,
        convertToBaseEUR,
        getCurrentCurrency,
        updateCurrency,
        updateDatabase
    }
}

