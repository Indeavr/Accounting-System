const refreshTopStatisticsFunc = function (database) {
    
    function execute (){

        const knownExpArray = database.expenses[0];
        const expensesArray = database.expenses
        
        function createTopStatistics(){
            let emptystatisticsZone = `<div id="account-info" class="accountInfo col-xs-8"></div>`;
            let emptySavingsZone = `<div id="savings-info" class="accountInfo col-xs-4"></div>`;
            $("#account-info-wrap").attr("class", "col-xs-12");
            $("#account-info-wrap").append(emptystatisticsZone);
            $("#account-info-wrap").append(emptySavingsZone);
        
            let listItemSalary = (function () {
                let salaryDisplay = database.budget.salary;
                return `<li>Salary: <span class="info-item" id="salaryDisplay">${salaryDisplay}</span></li>`
            })();
            
            let listItemTotalExpenses = (function(){
                let totalExp = 0;
                                
                for (let i = 0; i<=knownExpArray.length-1;i++){
                    totalExp += knownExpArray[i].amount
                }
    
                for (let i = 1; i<=expensesArray.length-1;i++){
                    totalExp += expensesArray[i].amount
                }
                return `<li>Total Expenses: <span class="info-item" id="totalExp">${totalExp}</span></li>`
            })(); 
    
            let listItemBiggestExpenses;
            let listItemMostSpent;
            (function(){
                let maxSpending = 0;
                let maxCategory;
    
                for (let i = 0; i<=knownExpArray.length-1;i++){
                    if (knownExpArray[i].amount >= maxSpending){
                        maxSpending = knownExpArray[i].amount;
                        maxCategory = knownExpArray[i].category;
                    }
                }
    
                for (let i = 1; i<=expensesArray.length-1;i++){
                    if (expensesArray[i].amount >= maxSpending){
                        maxSpending = expensesArray[i].amount;
                        maxCategory = expensesArray[i].category;
                    }
                }
                
                listItemMostSpent = `<li>Most spent on: <span class="info-item" id="maxCategory">${maxCategory}</span></li>`;
                listItemBiggestExpenses = `<li>Biggest Expense: <span class="info-item" id="maxSpending">${maxSpending}</span></li>`;
            })()
            
            let leftPart = [`<ul class="col-xs-6">`, listItemSalary, listItemTotalExpenses, `</ul>`];
            
            let middlePart = [`<ul class="col-xs-6">`, listItemMostSpent, listItemBiggestExpenses, `</ul>`];
            
            $("#account-info").append(leftPart.join("") + middlePart.join(""));
    
            let rightPart = [`<ul>`, `</ul>`];
            for (let i=0; i<=database.budget.savingGoals.length-1; i++) {
                let savingsGoalValue = `<li>` + `Value: ` + database.budget.savingGoals[i].amount + `</li>`;
                let savingsGoalDescription = `<li>` + `Short note: ` + database.budget.savingGoals[i].note + `</li>`;
                let both = savingsGoalValue + savingsGoalDescription;
                rightPart.splice(rightPart.length-1, 0, both)
            }
    
            $("#savings-info").append(rightPart.join(""));            
        }
    
        function refreshTopStatistics(currencyMultiplyer) {
            $("#salaryDisplay").text(database.budget.salary);
            
            (function(){
                let totalExp = 0;
                for (let i = 0; i<=knownExpArray.length-1;i++){
                    totalExp += knownExpArray[i].amount;
                    }
    
                for (let i = 1; i<=expensesArray.length-1;i++){
                    totalExp += expensesArray[i].amount;
                    }
                $("#totalExp").text(totalExp);
            })();
            
            (function(){
                let listItemBiggestExpenses;
                let listItemMostSpent;
                let maxSpending = 0;
                let maxCategory;
    
                for (let i = 0; i<=knownExpArray.length-1;i++){
                    if (knownExpArray[i].amount >= maxSpending){
                        maxSpending = knownExpArray[i].amount;
                        maxCategory = knownExpArray[i].category;
                    }
                }
    
                for (let i = 1; i<=expensesArray.length-1;i++){
                    if (expensesArray[i].amount >= maxSpending){
                        maxSpending = expensesArray[i].amount;
                        maxCategory = expensesArray[i].category;
                    }
                }
                $("#maxCategory").text(maxCategory);
                $("#maxSpending").text(maxSpending);
            })()
        }
    
        if ($("#account-info-wrap").attr("class") !== "col-xs-12") {
            createTopStatistics();
            console.log("creating top statistics")
        } else {
            refreshTopStatistics();
            console.log("refresh top statistics")
        }
    }

    return execute    
};