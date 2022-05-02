var now = new Date();
// 오늘 날짜
var firstDay = new Date("2001-12-25");
// 처음 만난 날짜

var toNow = now.getTime(); //오늘 날짜를 밀리초로 바꿈
var toFirst = firstDay.getTime(); //처음 만난 날을 밀리초로 바꿈
var passedTime = toNow - toFirst; //처음 만난 날과 오늘 사이의 차이(밀리초)

var passedDay = Math.round(passedTime/(1000*60*60*24)); //밀리초를 날짜 수로 변환한 후 반올림
//1일 = 24시간 * 60분 * 60초 * 1000밀리초

document.querySelector("#accent").innerText = passedDay + "일"; //#accent 영역에 표시

