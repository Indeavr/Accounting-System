function modelFactory() {
    function createKnownExpense(type, category, amount, note) {

        validator().validateKnownExpenses(type, category, amount, note)

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

        // let calculateBudget = function () {
        //     return this.salary - this.knownExpenses.reduce( (a,b) => a.amount + b.amount, 0) - this.savingGoals.amount
        // }


        validator().validateBudget(type, category, amount, note)

        return {
            get salary() {
                return salary
            },
            get payday() {
                return payday
            },
            get knownExpenses() {
                return knownExpenses
            },
            get savingGoals() {
                return savingGoals
            },

            //amount: calculateBudget()
        }
    }

    return {
        createKnownExpense,
        createSavingGoals,
        createBudget
    }
}


