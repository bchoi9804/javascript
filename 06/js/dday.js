var now = new Date(); // 오늘 날짜
var firstDay = new Date("2001-12-25"); // 처음 만난 날짜
var toNow = now.getTime(); //오늘 날짜를 밀리초로 바꿈
var toFirst = firstDay.getTime(); //처음 만난 날을 밀리초로 바꿈
var passedTime = toNow - toFirst; //처음 만난 날과 오늘 사이의 차이(밀리초)
var passedDay = Math.round(passedTime/(1000*60*60*24)); //밀리초를 날짜 수로 변환한 후 반올림
//1일 = 24시간 * 60분 * 60초 * 1000밀리초
document.querySelector("#accent").innerText = passedDay + "일"; //#accent 영역에 표시

calcDate(8000);
calcDate(9000);
calcDate(10000);
calcDate(20000);

function calcDate(days) {
    var future = toFirst + days * (1000 * 60 * 60 * 24); //처음 만난 날에 100일을 더합니다.
    var someday = new Date(future); //future값을 사용해 Date 객체의 인스턴스를 만든다.
    var year = someday.getFullYear(); //'연도'를 가져와 year변수에 저장한다.
    var month = someday.getMonth(); //'월'을 가져와 month변수에 저장한다.
    var date = someday.getDate(); //'일'을 가져와 date변수에 저장한다.
    document.querySelector("#date" + days).innerText = year + "년" + month + "월" + date + "일";
}