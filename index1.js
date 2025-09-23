
// let form = document.getElementById("form");
// form.addEventListener('submit' ,(event) => {
//   event.preventDefault();
//   formSubmitted();

// })


let errorName = document.getElementById("name-error");
let errorEmail = document.getElementById("email-error");
let errorOrg = document.getElementById("org-error");

function formSubmitted(){

  let a =document.getElementById("name").value;
let b =document.getElementById("email").value;
var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
let c =document.getElementById("organization").value;
let num = document.getElementById("number").value.trim();
let number = /^03[0-9]{2}-?[0-9]{7}$/;
let discription1 = document.getElementById("field1").value;
let discription2 = document.getElementById("field2").value;
let discription3 = document.getElementById("field3").value;
let discription4 = document.getElementById("field4").value;
let discription5 = document.getElementById("field5").value;
let dis1 = discription1.trim().split(/\s+/).length ;
let dis2 = discription2.trim().split(/\s+/).length ;
let dis3 = discription3.trim().split(/\s+/).length ;
let dis4 = discription4.trim().split(/\s+/).length ;
let dis5 = discription5.trim().split(/\s+/).length ;
let rdb1 =document.getElementById("male");
let rdb2 =document.getElementById("female");

let check1 = document.getElementById("checkbox1").checked;
let check2 = document.getElementById("checkbox2").checked;
let check3 = document.getElementById("checkbox3").checked;
let check4 = document.getElementById("checkbox4").checked;
let country = document.getElementById("t1").value.trim();
  document.getElementById("name-error").innerText = "";
  document.getElementById("email-error").innerText = "";
  document.getElementById("org-error").innerText = "";
  document.getElementById("num-error").innerText = "";
  document.getElementById("rdb").innerText = "";
  document.getElementById("select-option").innerText = "";
  document.getElementById("des1").innerText = "";
  document.getElementById("des2").innerText = "";
  document.getElementById("des3").innerText = "";
  document.getElementById("des4").innerText = "";
  document.getElementById("des5").innerText = "";
  document.getElementById("chk1").innerText = "";
  document.getElementById("chk2").innerText = "";
  document.getElementById("chk3").innerText = "";
  document.getElementById("chk4").innerText = "";

if(a=="" || b=="" || c==""){
 if (a == "" ){
errorName.innerText ="**plz fill this field"
  return false; 
 } 
 
 else if  (!b.match(pattern)){
  errorEmail.innerText ="**enter your email @gmail.com"
  return false;
 }
else if  ( c==""){
   errorOrg.innerText ="**enter organisation"
  return false;
}
 

else{
  return true;
}
//   let error = "this will be filled first"
//  document.getElementById("name").value= error;
   

}


else if (!number.test(num)){
  let x= "enter a vlid number like(0341-5011162)"
  document.getElementById("num-error").innerHTML=x;
  return false;
}

    else if ( rdb1.checked !== true && rdb2.checked !== true ){
     let c= "**plz select gneder"
     document.getElementById("rdb").innerHTML=c; 
      return false

      
    }

    else if (country === ""){
      s ="select country";
      document.getElementById("select-option").innerHTML=s;
      return false;
    }

else if (dis1 < 5 || dis2 < 5 || dis3 < 5 || dis4 < 5  || dis5 < 5){


   if (dis1 < 5){
  y="** add awards details more than 5 words"
  document.getElementById("des1").innerText = y;
  return false;
 }
    else if (dis2 < 5){
  y="** add awards details more than 5 words"
  document.getElementById("des2").innerText = y;
  return false;
 }
     else if (dis3 < 5){
  y="**  add awards details more than 5 words "
  document.getElementById("des3").innerText = y;
  return false;
 }
    else if (dis4 < 5){
  y="**  add awards details more than 5 words "
  document.getElementById("des4").innerText = y;
  return false;
 }
    else if  (dis5 < 5) {
  y="**  add awards details more than 5 words "
  document.getElementById("des5").innerText = y;
  return false;
 } 

return false;
}


else if(check1 == false || check2== false  || check3 == false || check4 == false){
if  (  check1 == false){
  x="** Please checkbox is reuired"
  document.getElementById("chk1").innerText = x;
  return false;
}
if  (  check2 == false){
  x="** Please fill this field is must"
  document.getElementById("chk2").innerText = x;
  return false;
}
if  (  check3 == false){
  x="** Please fill this field is must"
  document.getElementById("chk3").innerText = x;
  return false;
}
if  (  check4 == false){
  x="** Please fill this field is must"
  document.getElementById("chk4").innerText = x;
  return false;
}
else{
  return true
}

}
else{
    return true;


    }
}

