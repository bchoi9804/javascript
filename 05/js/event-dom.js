var coverImage = document.querySelector("#cover"); //id=cover인 이미지를 가져와 coverImage변수에 저장함
coverImage.onclick = function() { //이미지를 눌렀을 때 실행할 함수를 익명함수를 이용해 작성함
    alert('눌렀습니다');
};

coverImage.onmouseover = function() {
    coverImage.style.border = "5px black solid";
};

coverImage.onmouseout = function() {
    coverImage.style.border = "";
};