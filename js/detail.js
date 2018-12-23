// smoothScroll;
var lastPos = 0;
function trackPositionElement() {
  var currentPos = document.documentElement.scrollTop;
  return currentPos;
}
window.onscroll = function() {
  lastPos = trackPositionElement();

  if (lastPos <= 500) { //section kedua
    document.getElementsByClassName("scrollTop")[0].classList.remove("show");
  }else {
    document.getElementsByClassName("scrollTop")[0].classList.add("show");
  }

};
