function modelFactory() {
    function createKnownExpense(type, category, amount, note) {

       // validator().validateKnownExpenses(type, category, amount, note)

        return {
            get type() {
                return type
            },
            get category() {
                return category
            },
            get amount() {
                return amount
            },
            get note() {
                return note
            }
        }
    }

    function createSavingGoals(amount, note) {
        return {
            get amount() {
                return amount
            },
            get note() {
                return note
            }
        }
    }

    function createBudget(salary, payday, knownExpenses, savingGoals) {

        //validator().validateBudget(type, category, amount, note)

        return {
            get salary() {
                return salary
            },
            get payday() {
                return salary
            },
            knownExpenses,
            savingGoals,
            amount: salary,
            moneyLeft: salary
        }
    }

    function createExpense(date, category, amount, note) {

        return {
            get type() {
                return data
            },
            get category() {
                return category
            },
            get amount() {
                return amount
            },
            get note() {
                return note
            }
        }
    }

    function createIncome(date, category, amount, note) {

        return {
            get type() {
                return data
            },
            get category() {
                return category
            },
            get amount() {
                return amount
            },
            get note() {
                return note
            }
        }
    }


    return {
        createKnownExpense,
        createSavingGoals,
        createBudget,
        createExpense,
        createIncome
    }
}