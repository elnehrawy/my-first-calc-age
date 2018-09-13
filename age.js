/* eslint-env browser */


function age() {
    
    "use strict";
    //my age
    var calcDay = document.getElementById("calcday").value,
        calcMonth = document.getElementById("calcmonth").value, 
        calcYear = document.getElementById("calcyear").value,
    //date now 
        today = new Date(),
        dd = today.getDate(),
        mm = today.getMonth() + 1, //January is 0!
        yyyy = today.getFullYear(),
    //date now - my age    
        resultDay = dd - parseInt(calcDay),
        resultMonth = mm - parseInt(calcMonth),
        resultYear = yyyy - parseInt(calcYear),
    //shortcut for decument.    
        day = document.getElementById("day"),
        month = document.getElementById("month"),
        year = document.getElementById("year"),
     //negative action + or -    
        resultDayNegative = Math.abs(resultDay + 30),
        resultMonthNegative = resultMonth + 12 - 1,
        resultYearNegative = Math.abs(resultYear - 1);
     // if for day and month <= 0     
    if (resultDay <= 0 && resultMonth <= 0 && resultYear) {
        year.innerHTML = "You have <mark> " + resultYearNegative + " </mark>years";
        month.innerHTML = " and <mark> " + resultMonthNegative + " </mark>months";
        day.innerHTML = " and <mark> " + resultDayNegative + " </mark>days.<br><ins>&copy; 2008-2018 EL-NEHRAWY front-end web designer.All Rights Reserved.</ins>"; 
    }
    // if for day only <= 0
        else if (resultDay <= 0 && resultMonth && resultYear) {
        year.innerHTML = "You have <mark> " + resultYear + " </mark>years";
        month.innerHTML = " and <mark> " + resultMonthNegative + " </mark>months";
        day.innerHTML = " and <mark> " + resultDayNegative + " </mark>days.<br><ins>&copy; 2008-2018 EL-NEHRAWY front-end web designer.All Rights Reserved.</ins>";     
    }
    // if for month only <= 0
        else if (resultMonth <= 0 && resultYear && resultDay) {
        year.innerHTML = "You have <mark> " + resultYearNegative + " </mark>years";
        month.innerHTML = " and <mark> " + parseInt(resultMonth + 12) + " </mark>months";    
        day.innerHTML = " and <mark> " + resultDay + " </mark>days.<br><ins>&copy; 2008-2018 EL-NEHRAWY front-end web designer.All Rights Reserved.</ins>";
        }
    // if for day and month and year >= 0
        else if (resultDay >= 0 && resultMonth >= 0 && resultYear >= 0) {
        year.innerHTML = "You have <mark> " + resultYear + " </mark>years";
        month.innerHTML = " and <mark> " + resultMonth + " </mark>months";    
        day.innerHTML = " and <mark> " + resultDay + " </mark>days.<br><ins>&copy; 2008-2018 EL-NEHRAWY front-end web designer.All Rights Reserved.</ins>";
    }
    // if for year only == 0 and day <=0 (year == 0)
        else if (resultYear === 0 && resultDay <= 0 && resultMonth) {
        year.innerHTML = "You have <mark> " + resultYear + " </mark>years";
        month.innerHTML = " and <mark> " + Math.abs(resultMonth - 1) + " </mark>months";
        day.innerHTML = " and <mark> " + Math.abs(resultDay + 30) + " </mark>days.<br><ins>&copy; 2008-2018 EL-NEHRAWY front-end web designer.All Rights Reserved.</ins>";
    }
    // all values must be writen....................
        else {year.innerHTML = "You forget to write your age and date"; }
    return x;
}
var x = age;
