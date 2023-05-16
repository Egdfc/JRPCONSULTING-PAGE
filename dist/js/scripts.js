window.addEventListener("scroll",function(){
var header = this.document.querySelector(".navegacionbar");
<<<<<<< HEAD
<<<<<<< HEAD
header.classList.toggle("sticky",window.scrollY> 0);
=======
header.classList.toggle("sticky",window.scrollY > 0);
>>>>>>> 9ad7111f445e72242e0cd0ed6ea60c43b05f25d8
})



function Comprobar(obj){
  if ( !obj.acuerdo[0].checked )
  {
       alert("Debes estar de acuerdo")
        return false;
  }
  return true 
}


var name= document.getElementById('name');
var email= document.getElementById('email');
var phone = document.getElementById('phone');
var message=document.getElementById('message');


var btnEnviar=document.getElementById('submitButton');

btnEnviar.onclick = presionaEnviar;


=======
header.classList.toggle("sticky",window.scrollY > 0);
})
>>>>>>> b83475f ("quite padding navbar")
