
// let form = document.getElementById("form");
// form.addEventListener('submit' ,(event) => {
//   event.preventDefault();
//   formSubmitted();

// })




function formSubmitted(){

  let a =document.getElementById("name").value;
let b =document.getElementById("email").value;
let c =document.getElementById("organization").value;
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

let check1 = document.getElementById("checkbox1").checked;
let check2 = document.getElementById("checkbox2").checked;
let check3 = document.getElementById("checkbox3").checked;
let check4 = document.getElementById("checkbox4").checked;

if(a=="" || b=="" || c==""){
 if (a == "" ){
  x="** Please fill this field is must"
  document.getElementById("name-error").innerText = x;
  return false; 
 } 
 
 else if  (b==""){
  y="** Please fill this field is must"
  document.getElementById("email-error").innerText = y;
  return false;
 }
else if  ( c==""){
  x="** Please fill this field is must"
  document.getElementById("org-error").innerText = x;
  return false;
}
 

else{
  return true;
}
//   let error = "this will be filled first"
//  document.getElementById("name").value= error;
   

}

else if (dis1 < 5 || dis2 < 5 || dis3 < 5 || dis4 < 5  || dis5 < 5){


   if (dis1 < 5){
  y="** add awards details more than 5 words"
  document.getElementById("des1").innerText = y;
  return false;
 }
    else if (dis2 < 5){
  y="** add awards details more than 5 words  "
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
//  if (di< 4){
//   x="** Please fill this field is must"
//   document.getElementById("des1").innerText = x;
 
   
//   return false;
//  }
 

//   if (di < 5){
//   y="** Please fill this field is must"
//   document.getElementById("des2").innerText = y;
//   return false;
//  }
//  if (discription3 ==""){
//   y="** Please fill this field is must"
//   document.getElementById("des3").innerText = y;
//   return false;
//  }
// if  (  discription4 ==""){
//   x="** Please fill this field is must"
//   document.getElementById("des4").innerText = x;
//   return false;
// }
// if  (  discription5 ==""){
//   x="** Please fill this field is must"
//   document.getElementById("des5").innerText = x;
//   return false;
// }
//  else{
//   return true;
//  }



    // alert(" description must be more than 8 words")
    // return false;


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

