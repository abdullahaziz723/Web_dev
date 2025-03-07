var isstatus=document.querySelector("h5")
var add =document.querySelector("#add");
var check =0;
// var remove=document.querySelector("#remove")

add.addEventListener("click",function(){
    if(check ==0){
        isstatus.innerHTML="friend added";
        isstatus.style.color="green";
        add.innerHTML="remove";
        check=1;
    }
    else{
        isstatus.innerHTML ="fereind removed";
        isstatus.style.color="red";
        add.innerHTML="add";
        check=0
    }
   
})

// remove.addEventListener("click",function(){
//     isstatus.innerHTML = "friend removed";
//     isstatus.style.color ="red";
// })
