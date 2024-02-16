var imgBox = document.querySelector(".img-box");
var imgWrap = document.querySelector(".img-wrap");
var leftScope = imgBox.offsetLeft;
var original = document.getElementById("original");
var line = document.getElementById("line");


original.style.width = imgBox.offsetWidth + "px";

imgBox.onmousemove = function (e)
{
    var boxWidth = (e.pageX - leftScope) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}