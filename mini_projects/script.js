var isstatus=document.querySelector("h5")
var add =document.querySelector("#add");
var check =0;
// var remove=document.querySelector("#remove")

// add.addEventListener("click",function(){
//     if(check ==0){
//         isstatus.innerHTML="friend added";
//         isstatus.style.color="green";
//         add.innerHTML="remove";
//         check=1;
//     }
//     else{
//         isstatus.innerHTML ="fereind removed";
//         isstatus.style.color="red";
//         add.innerHTML="add";
//         check=0
//     }
   
// })

// remove.addEventListener("click",function(){
//     isstatus.innerHTML = "friend removed";
//     isstatus.style.color ="red";
// })



//---------------------------------------------projexxcct 2--------------------------------------------
var con=document.querySelector(".image");
var love = document.querySelector("i");
con.addEventListener("dblclick",function(){
 love.style.transform='translate(50px,-50px) scale(1)';

 setTimeout(function(){
love.style.transform='translate(0px,0px) scale(0)';
 },2000);
});

console.log("dasda");