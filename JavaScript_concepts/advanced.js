//var const let variables 
//js has two versions   es5 and es6
//var was in es5 and const and let are introduced in es6
//var is function scoped in nature
//var adds itself to the window object
//let  and const is braces scoped
//js m khuch features h jo hum use krte h wo js m nhi h still we can use them as js borrow features from window  and window is a box of features.
// ex-alert prompt CONSOLE etc
//for variables these are stored in heap memory
//execution context mtlb jab bhi hum ek funtion run krenge wo khud ka ek imaginary container bna lega jismein uski teen cheez hongi
//1)variables
//2)funtion inside that parent func
//3)lexical environment of that funtion
let a=129;
function abcd (){
    var a =12;
    function abc(){
        let b= 12;
    }
}