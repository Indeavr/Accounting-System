(function callendarOperator (){
    let today = new Date();
    
    (function setMonthAndYear(){
        let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        let currentMonth = monthNames[today.getUTCMonth()];
        let currentYear = today.getUTCFullYear();
        $("#displayCallendarMonthYear").text(function() {
                return currentMonth + ` ` + currentYear;
        });
    })();

    (function setCallendarDates(){
        let callendarCells = $(".callendar td");
        let currentDate = today.getUTCDate();
        let numberOfDaysToRevert = currentDate-1;
        let callendarStartDate = new Date();
        callendarStartDate.setDate(today.getDate() - numberOfDaysToRevert); 
        let firstAsDayOfWeek = callendarStartDate.getUTCDay();
        if (firstAsDayOfWeek === 0){
            firstAsDayOfWeek = 7;
        }
        callendarStartDate.setDate(callendarStartDate.getDate() - (firstAsDayOfWeek - 1));
        let date = callendarStartDate;
        
        for (let i = 0; i<=callendarCells.length-1; i++){
            if ((date.getDate() === today.getDate()) && (date.getUTCMonth() === today.getUTCMonth())){

                $(callendarCells[i]).attr("id", "today");
                let elem = document.createElement("strong");
                let txt = document.createTextNode(date.getDate());
                elem.appendChild(txt);
                $(callendarCells[i]).append(elem);

            } else if (date.getUTCMonth()!==today.getUTCMonth()){
                $(callendarCells[i]).addClass("mutedDays");
                $(callendarCells[i]).text(date.getDate());

            } else {
                $(callendarCells[i]).text(date.getDate());
            }
            date.setDate(date.getDate() + 1);
        }
    })();
})();