window.addEventListener("scroll",function(){
var header = this.document.querySelector(".navegacionbar");
header.classList.toggle("sticky",window.scrollY > 0);
})