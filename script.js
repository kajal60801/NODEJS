// function sayHello() {
//     let you = prompt("What's your name? ");
//     console.log("Hello",you + "I");
// }
// sayHello();
// let varContainingFunction = function() {
//     let varInFunction = "I'm in a function. ";
//     console.log("hi! there",varInFunction);
// };
// varContainingFunction();
// function tester(para1,para2){
//     return para1 + " " + para2;
// }
// const arg1 = "arguement 1";
// const arg2 = "arguement 2";
// tester(arg1, arg2);
// console.log(tester(arg1, arg2));

// function addTwoNumbers() {
//     let x = prompt("Enter a number:");
//     let y = prompt("Enter another number:");

//     let num1 = parseInt(x);
//     let num2 = parseInt(y);

//     let sum = num1 + num2;
//     console.log("The sum is: " + sum);
//     return sum;
// }

// addTwoNumbers();

// function addNumbers(num1, num2) {
//     return parseInt(num1) + parseInt(num2);
// }
// const result = addNumbers("10", "20");
// const result2 = addNumbers();
// const result3 = addNumbers("6","16");

// console.log(result);
//default parameters in functions
// function addTwoNumbers(x=2,y=3){
//     console.log(x+y);
// }
// addTwoNumbers(1,2);
// addTwoNumbers();



//ARROW FUNCTIONS
// let doingArrowStuff = x => console.log(x)
// doingArrowStuff("Great!");

// let addTwoNumbers = (x,y) => console.log(x+y);
// addTwoNumbers(5,3);

// const arr=["squirrel" ,"cat","buddy"];
// arr.forEach(e => console.log(e));




//spread operator
// let spread = ["so","much","fun"];
// let mess=["js","is",...spread,"and","powerful"];
// console.log(mess);

//example 2
// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let arr=[5,9];
// addTwoNumbers(...arr);
//example 3
// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a);
// }
// let arr=[5,9];
// let arr2=[6,7];
// addFourNumbers(...arr,...arr2);


//Rest Parameter
//comes on function defintion array ke form mein aajayenge
// function someFunction(param1, ...param2){
//     console.log(param1,param2);
// }
// someFunction("hi","there","how r uh?");


//Returning function values
// let addTwoNumbers = (x,y) =>  (x+y);
// let resultArr =[];
// for(let i =0 ;i<10;i++){
//     let result = addTwoNumbers(i,2*i);
//     resultArr.push(result);
// }
// console.log(resultArr);



//returning with arrow function
//let addTwoNumber = (x,y)=>x+y;
//let result = addTwoNumber(12,15);
//console.log(result);
// let addtwonumber =(x,y) => {
//     console.log("adding..");
//     return x+y;
// }


//variable scope in function
// var is function scope
//let and cons are block scope
//local variable
// function testAvailability(x){
//    console.log("available here:",x);
// }
// testAvailability("hi");
// console.log("not available here:",x);



// function testAvailability(x){
//     let y = "local variable";
//     console.log("available here:",y);
// }
// testAvailability("hi");
// console.log("not available here:",y);


// function testAvailability(){
//     let y = "I' return";
//     console.log("available here:",y);
//     return y;
// }
// let z = testAvailability()
// console.log(" available here:",z);
// console.log("not available here:",y);

// function doingStuff(){
//     if(true){
//         var x ="local";
//     }
//     console.log(x);
// }
// doingStuff();

// function doingStuff(){
//     if(true){
//         console.log(x);
//         var x ="local";
//     }
    
// }
// doingStuff();

// function doingStuff(){
//     if(true){
//         console.log(x);
//         var x ="local";
//     }
//     }
// doingStuff();

// function doingStuff(){
//     if(true){
        
//         const x ="local";
//     }
//     console.log(x);
// }
// doingStuff();


//global variable

// let globalVar = "accessible everywhere";
// console.log("outside function:",globalVar);
// function creatingNewScope(x){
//     console.log("access to global vars inside function.",globalVar);
// }
// creatingNewScope("some parameter");
// console.log("still available:",globalVar);


// let x ="global";
// function doingStuff(){
//     let x ="local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);
//imediately invoked function expression
// (function(){
//     console.log("iife");
// })()
// function getRecursive(nr){
//     console.log(nr);
//     getRecursive(--nr);

// }
// getRecursive(3);
// function getRecursive(nr){
    // console.log(nr);
//     if(nr>0){
//         getRecursive(--nr)
//     }
//     console.log(nr);
// }
// getRecursive(3);
// function logRecursive(nr){
//     console.log("started function :",nr);
//     if(nr>0){
//         logRecursive(nr-1);
//     }
//     else{
//         console.log("done with recursion:",nr);
//     }
//     console.log("ended function:",nr);
// }
// logRecursive(3);
//the performance of recurssion is slightly worse than the performance of regular iteration using a loop. so if this cause a bottleneck situation that would really slow down your application then you might want to consider another approach
//nested function
// function doOuterFunctionStuff(nr){
//     console.log("outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         console.log(x+7);
//         console.log("i can acces the outer variavble:",nr);
//     }
// }
// doOuterFunctionStuff(5);
// function doOuterFunctionStuff(nr){
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         let z=10;

//     }
//     console.log("not accesbile",z);
// }
// doOuterFunctionStuff(2);
//anonymous function
// function doingdtuffAnonymusly(){
//     console.log("not secret though.")
// }
// function(){
//     console.log("not so secret though";)
// }
//function callbacks
// let functionVariable=function(){
//     console.log("not so secret");
// }
// function doFlexibleStuff(executeStuff){
//     executeStuff();
//     console.log("inside doflexblestuff function.");
// }
// doFlexibleStuff(functionVariable);
// function doOuterFunctionStuff(nr){
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x){
//         let z=10;

//     }
//     console.log("not accesbile",z);
// }
// doOuterFunctionStuff(2);
// let youGotThis=function(){
//     console.log("you are doing really well, keep coding");
// };
// setTimeout(youGotThis,1000);

//setInterval() function-if you need more encouraged you can use this. it work very similary but instead the specified function must onceit will keep on excuting it with specified interval

// setInterval(youGotThis,1000);
//quiz
// let val =10;
// function tester(val){
//     val+=10;
//     if(val<100){
//         return tester(val);
//     }
//     return val;
// }
// tester(val);

// console.log(val);
// let testFunction=function(){
//     console.log("hello")

// }();
// (function(){
//     console.log("welcome");
// })();
// (function(){
//     console.log("welcome");
// })();
// (function(){
//     let firstname = "kajal";
// })();

// let result=(function(){
//     let firstname="kajal";
//     return firstname;
// })();
// console.log(result);
// (function(firstname){
//     console.log("my name is "+ firstname);
// })("kajal");
// let test2 = (num)=>num+5;
// console.log(test2(14));
// var addFive1=function addFive1(num){
//     return num+2;
// };
// let addFive2 =(num)=>num+2;
// console.log(addFive1(14));