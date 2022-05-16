var bigPic =document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");

for(var i=0; smallPics.length; i++) {
    smallPics[i].addEventListener("click", changePic)
}

function changePic() {
    var newPic = this.src;
    bigPic.setAttribute("src", newPic);
}