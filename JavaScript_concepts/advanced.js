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
//3)lexical environment of that funtion (hota h ek chart jismeye likha hota h k appke  particular funtionki cheejo ko access kr skta h and kinko nhi,matlab ki it holds scope and scope chain)
// let a=129;
// function abcd (){
//     var a =12;
//     function abc(){
//         let b= 12;

//         var a =[1,2,3,4];
//         var x =[...a];
    //to copy refrence values we use spread operator
    //falsy values  ye hai =0  false undefined null NAN document.all
    //truthy values
    //for each loop srf  array p chalta hai matlab ko jab  bhi tumarha pass ek array ho ,tab usme  foreach loop aata h.
    //objects pr  loop lagane k liye for in loop hota h ..
    //callback functions
    //first class fncs =means js m ek conecpet hota h  jiska mtlb we can use function as  a value in variable


    //what is a closure in a js ?
    function abcd (){
        var x =12;
        return function abc(){
            console.log(x);
        }
    }

     var ans =abcd();
     ans();

        
//     }
// }