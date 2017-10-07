const expenseChartLoadFunc = function() {
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

//submit requires these to use parseInt to work in chart
function drawChart() {
//     let taxes = 0
//    let insurance = 0
//    let savings = 0
//    let investments = 0
//    let housing = 0
//    let debtRepayment = 0
//    let medicalDental = 0
//    let food = 0
//    let entertainmentAndRecreation = 0
//    let miscellaneous = 0
//    let automobile = 0
//    let clothing = 0
//    let schoolChildcare = 0;

   let taxes = 200,
   insurance = 100,
   savings = 200,
   investments = 50,
   housing = 120,
   debtRepayment = 150,
   medicalDental = 20,
   food = 300,
   entertainmentAndRecreation = 100,
   miscellaneous = 60,
   automobile = 120,
   clothing = 75,
   schoolChildcare = 20;

        let category = $("input[name=optradio]:checked").val()
        let amount = +$('#subtractMoney').val()
  
        switch (category){
            case 'Taxes':
                taxes = +amount
                break
            case 'Housing':
                housing += amount
                break
            case 'Food':
                food += amount
                break
            case 'Automobile':
                automobile += amount
                break
            case 'Insurance':
                insurance += amount
                break
            case 'Debt Repayment':
                debtRepayment += amount
                break
            case 'Entertainment and Recreation':
                entertainmentAndRecreation += amount
                break
            case 'Clothing':
                clothing += amount
                break
            case 'Savings':
                savings += amount
                break
            case 'Medical/Dental':
                medicalDental += amount
                break
            case 'Miscellaneous':
                miscellaneous += amount
                break
            case 'School/Childcare':
                schoolChildcare += amount
                break
            case 'Investments':
                investments += amount
                break
        }
  
  var data = google.visualization.arrayToDataTable([
    ['Category', 'amount'],
    ['Taxes', taxes],
    ['Housing', housing],
    ['Food',  food],
    ['Automobile', automobile],
    ['Insurance', insurance],
    ['Debt Repayment', debtRepayment],
    ['Entertainment and Recreation', entertainmentAndRecreation],
    ['Clothing',  clothing],
    ['Savings', savings],
    ['Medical/Dental', medicalDental],
    ['Miscellaneous', miscellaneous],
    ['School/Childcare', schoolChildcare],
    ['Investments', investments]
  ]);
  var options = {
    title: 'Expenses'
  };
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

return{
    drawChart
}
}