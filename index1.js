

function formSubmitted(){
let a =document.getElementById("name").value;
let b =document.getElementById("email").value;
let c =document.getElementById("organization").value;
let discription1 = document.getElementById("field1").value;
let discription2 = document.getElementById("field2").value;
let discription3 = document.getElementById("field3").value;
let discription4 = document.getElementById("field4").value;
let discription5 = document.getElementById("field5").value;
let check = document.getElementById("checkbox1").checked;

if(a==""|| b=="" || c==""){
  alert ("filled all the fields first")
//   let error = "this will be filled first"
//  document.getElementById("name").value= error;
   
  return false;
} 

else if (discription1 ==""|| discription3 =="" || discription2 =="" || discription4 =="" ){
    alert(" description must be more than 8 words")
    return false;

}
else if(check == false){
  alert("checkfield is required")
    return false;
}
else{
    return true;


    }
}
