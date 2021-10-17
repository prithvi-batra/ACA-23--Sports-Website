var item = document.querySelectorAll(".timeline li")
function isitemInViewPort (el){
  var rect = el.getBoundingClientRect();
  return (
  rect.top >= 0  &&
  rect.left >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc(){
  for(var i = 0 ; i < item.length ; i++){
    if(isitemInViewPort(item[i])){
      item[i].classList.add("in-view")
    }
  }
}
window.addEventListener("scroll" , callbackFunc);