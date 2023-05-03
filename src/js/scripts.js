// This file is intentionally blank
// Use this file to add JavaScript to your project


window.addEventListener("scroll",function(){
    var header = this.document.querySelector("navbar navbar-expand-lg navbar-dark bg-blue");
    header.classList.toggle("sticky",window.scrollY> 0);
    })