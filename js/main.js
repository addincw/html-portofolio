// smoothScroll;
var lastPos = 0;
function jumpSection(elementId){
  var element1 = document.getElementsByClassName("active")[0];
  element1.classList.remove("active");
  var element1 = document.getElementsByName(elementId)[0];
  element1.classList.add("active");

  smoothScroll(elementId);
}
function smoothScroll(elementId, currentPos = 0){
  var target = document.getElementById(elementId).offsetTop;
  scroller = setTimeout(function(){
    smoothScroll(elementId, currentPos);
  }, 1);

  currentPos = currentPos + 15;

  if (currentPos >= target) {
    clearTimeout(scroller);
  }

  window.scroll(0, currentPos);
}
function backToTop(currentPos = lastPos){
  scroller = setTimeout(function(){
    backToTop(currentPos);
  }, 1);

  currentPos = currentPos - 50;
  // console.log(elementId+" : "+currentPos);

  if (currentPos <= 0) {
    clearTimeout(scroller);
  }

  window.scroll(0, currentPos);
}
function trackPositionElement() {
  var currentPos = document.documentElement.scrollTop;
  return currentPos;
}
window.onscroll = function() {
  lastPos = trackPositionElement();

  if (lastPos <= 500) { //section kedua
    document.getElementsByClassName("scrollTop")[0].style.display="none";
    document.getElementsByClassName("navbar-folio-toogle")[0].style.display="none";
  }else {
    document.getElementsByClassName("scrollTop")[0].style.display="block";
    document.getElementsByClassName("navbar-folio-toogle")[0].style.display="block";
  }

};
