function validate(){
var user = document.getElementById("user").value;
var email = document.getElementById("email").value;
var pass = document.getElementById("pass").value;
var confirm = document.getElementById("confirm").value;
var result = document.getElementById("result");
result.style.color="#fff";
result.style.background="#f00";
result.style.padding="10px";
result.style.transition="all .4s linear";
result.style.textAlign="center";






if(user=="" && email=="" && pass=="" && confirm==""){

result.innerHTML="enter data in form";
return false; 






}else if (user.length<5 || user.length>15){

result.innerHTML="enter character 5-15";
return false;



    
}else if (email.indexOf('@',3)==-1){

 result.innerHTML="enter vaild E-mail";
 return false;   
    
    
    
}else if (pass.length<8){

result.innerHTML="enter at least 8 char in pass";
return false;



}else if (pass!=confirm){

    result.innerHTML="matching password";
    return false;
}



}