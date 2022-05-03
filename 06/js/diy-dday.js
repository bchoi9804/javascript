var firstDay = new Date("2001-12-25"); //처음 만난 날
var now = new Date(); //오늘 날짜
var toNow = now.getTime();
var toFirst = firstDay.getTime();
var passedTime = toNow - toFirst;
var passedDay = Math.round(passedTime/(24 * 60 * 60 * 1000));
document.querySelector("#accent").innerText = passedDay + "일";

calcDate(8000);
calcDate(9000);
calcDate(10000);
calcDate(20000);

function calcDate(days) {
    var future = toFirst + days*(24*60*60*1000);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth();
    var date = someday.getDate();
    document.querySelector("#date" + days).innerText = year + "년" + month + "월" + date + "일";
     
}

