window.addEventListener("scroll",function(){
var header = this.document.querySelector("navbar navbar-expand-lg navbar-dark bg-blue");
header.classList.toggle("sticky",window.scrollY> 0);
})