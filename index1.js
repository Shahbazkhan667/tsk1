

function formSubmitted(){
let a =document.getElementById("name").value;
let b =document.getElementById("email").value;
let c =document.getElementById("organization").value;
let discription1 = document.getElementById("field1").value;
let discription2 = document.getElementById("field2").value;
let discription3 = document.getElementById("field3").value;
let discription4 = document.getElementById("field4").value;
let discription5 = document.getElementById("field5").value;
let check1 = document.getElementById("checkbox1").checked;
let check2 = document.getElementById("checkbox2").checked;
let check3 = document.getElementById("checkbox3").checked;
let check4 = document.getElementById("checkbox4").checked;

if(a==""|| b=="" || c==""){
 if (a==""){
  x="** Please fill this field is must"
  document.getElementById("name-error").innerText = x;
  return false;
 }
 if (b==""){
  y="** Please fill this field is must"
  document.getElementById("email-error").innerText = y;
  return false;
 }
if  ( c==""){
  x="** Please fill this field is must"
  document.getElementById("org-error").innerText = x;
  return false;
}
 else{
  return true;
 }


//   let error = "this will be filled first"
//  document.getElementById("name").value= error;
   
  return false;
} 

else if (discription1 ==""|| discription3 =="" || discription2 =="" || discription4 =="" || discription5 =="" ){


 if (discription1 ==""){
  x="** Please fill this field is must"
  document.getElementById("des1").innerText = x;
  return false;
 }

  if (discription2 ==""){
  y="** Please fill this field is must"
  document.getElementById("des2").innerText = y;
  return false;
 }
 if (discription3 ==""){
  y="** Please fill this field is must"
  document.getElementById("des3").innerText = y;
  return false;
 }
if  (  discription4 ==""){
  x="** Please fill this field is must"
  document.getElementById("des4").innerText = x;
  return false;
}
if  (  discription5 ==""){
  x="** Please fill this field is must"
  document.getElementById("des5").innerText = x;
  return false;
}
 else{
  return true;
 }



    // alert(" description must be more than 8 words")
    // return false;

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



  // alert("checkfield is required")
  //   return false;
}
else{
    return true;


    }
}
