function showBudget() {
    let income = 100;
    let knownExpenses = 20;
    let savingGoal = 20;
    let budget = income - knownExpenses - savingGoal;
    document.getElementById("progressbar").value = budget; 
}