let loadPiechart = function () {

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
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


        var data = google.visualization.arrayToDataTable([
            ['Category', 'amount'],
            ['Taxes', taxes],
            ['Insurance', insurance],
            ['Savings', savings],
            ['Investments', investments],
            ['Housing', housing],
            ['Debt Repayment', debtRepayment],
            ['Medical/Dental', medicalDental],
            ['Food', food],
            ['Entertainment and Recreation', entertainmentAndRecreation],
            ['Miscellaneous', miscellaneous],
            ['Automobile', automobile],
            ['Clothing', clothing],
            ['School/Childcare', schoolChildcare]
        ]);

        var options = {'title': 'Expenses'};

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }
}