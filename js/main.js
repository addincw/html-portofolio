// smoothScroll;
var lastPos = 0;
function jumpSection(elementId){
  var element1 = document.getElementsByClassName("active")[0];
  element1.classList.remove("active");
  var element1 = document.getElementsByName(elementId)[0];
  element1.classList.add("active");
}
function trackPositionElement() {
  var currentPos = document.documentElement.scrollTop;
  return currentPos;
}
window.onscroll = function() {
  lastPos = trackPositionElement();

  if (lastPos <= 500) { //section kedua
    document.getElementsByClassName("scrollTop")[0].classList.remove("show");
    document.getElementsByClassName("navbar-folio-toogle")[0].classList.remove("show");
  }else {
    document.getElementsByClassName("scrollTop")[0].classList.add("show");
    document.getElementsByClassName("navbar-folio-toogle")[0].classList.add("show");
  }

};
