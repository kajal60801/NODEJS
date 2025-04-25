// maps
//map hold key values pair where key can be data type
//you can create map by passing an array to new( map method)
// const fruits=new Map([
//     ["apples",500],
//     ["banana",300],
//     ["oranges",200]
// ]);

// fruits.set("apples",500);
// fruits.set("oranges",800);//set() method can also be used to change existing map values

// console.log(fruits);
// fruits.get("apples");//get method get the values of a key in a map
// typeof fruits;






// diff between object and maps


// not directly iterable                  directly iterable
// do not have size property 
// keys must be strings or symbols 
// keys are not well ordered 

// JAVASCRIPT MAP METHODS

// const fruits=new Map([
//     ["apples",500],
//     ["banana",300],
//     ["oranges",200]
// ]);
// //Map.get()
// fruits.set("banana",500);
// Map.size;
// fruits.delete("apples");
// //fruits.clear();
// fruits.has("banana");   //has() method return true if a key exist in a map
// console.log(fruits);
// fruits.has("apples");

// let text ="";
// fruits.forEach (function(value,key){
//     text+=key+"="+value;
// })
// console.log(text);


//map.entries()
// let text="";
// for(const x of fruits.entries()){
//     text+=x;
// }
// console.log(text);


//map.keys() -return
// for(const x of fruits.keys()){
//     text+=x;
// }
// console.log(text);

//map.values()
// for(const x of fruits.values()){
//     text+=x;
// }
// console.log(text);

// let total=0;
// for(const x of fruits.values()){
//     total+=x;
// }
// console.log(total);

// const apples={name:"Apples"};
// const banana={name:"Banana"}
// const oranges={name:"Oranges"};
// const fruits =new Map();
// fruits.set(apples,500);
// fruits.set(banana,600);
// fruits.set(oranges,800);
// fruits.get("apples");
// console.log(fruits);

// const fruits=[
//     {name:"apples",quantity:300},
//     {name:"bananas",quantity:500},
//     {name:"oranges",quantity:200},
//     {name:"kiwi",quantity:150}
// ];
// function myCallback({quantity}){
//     return quantity>200?"ok":"low";
// }
// //group by quantity
// const result=Map.groupBy(fruits,myCallback);
// console.log(result);



//JAVASCRIPT DESTRUCTURING


// const person={
//     firstname:"john",
//     lastname :"Doe",
//     age:5
// };
// let{firstname,lastname}=person;
// let{lastname,firstname}=person;
// console.log(firstname);
// console.log(lastname);


//destructuring is not distructive

// ALIAS


// const person={
//     firstname:"john",
//     lastname :"Doe",
//     age:5
// };
// let {lastname:name}=person;
// console.log(name);
// console.log(lastname);

//STRING DESTRUCTURINGH

// let name="gurukultheschool";
// let[a1,a2,a3,a4,a5]=name;
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);





// const fruits=["banana","oranges","apples","mango"];
// // let[fruit1,,,fruit2]=fruits;
// // console.log(fruit1);
// // console.log(fruit2);

// let{[0]:fruit1,[1]:fruit2}=fruits;
// console.log(fruit1);
// console.log(fruit2);


// ARRAY POSITION VALUES
// const fruits=["banana","oranges","apples","mango"];
// let{[0]:fruit1,[1]:fruit2}=fruits;
// console.log(fruit1);
// console.log(fruit2);
// const numbers=[10,20,30,40,50,60,70];
// const[a,b,...rest]=numbers
// console.log(a);
// console.log(b);
// console.log(rest);
// const fruits=new Map([
//     ["apples",500],
//     ["banana",300],
//     ["oranges",200]
// ]);
// let text="";
// for(const[key,value]of fruits){
//     text+=" "+key+" "+" is "+ " "+value;
// }
// console.log(text);

// SWAAPPING JAVASCRIPT VARIABLE

// let firstname="john";
// let lastname="doe";
// [firstname,lastname]=[lastname,fistname];
// console.log(firstname);
// console.log(lastname);

// let x = 5;
// let z = x ** 2;
// console.log( z);

// let y = Math.pow(x, 2);
// console.log( y);

// x **= 2;
// console.log( x);
//INCLUDES== CASE SENSITIVE
// const fruits=["banana","oranges","apples","mango"];
// console.log(fruits.includes("mango"));
// console.log(fruits.includes("banana",3));


// TRAILING COMMAS
// ALSO KNOWN AS DANGLING OR TERMINAL COMMA IT IS SYMBOL THAT IS TYPED AFTER THE LAST ITEM OF LIST OF ELEMENTS IT HAVE BEEN LEGAL IN ARRAY LITERALS. LATER OBJECT JOINED ARRAYS AND WITH THE INTRODUCTION OF ES2017,ALSO KNOWN AS ES8

// const arr=[
//     "one",
//     "two",
//     "three",
// ];
// console.log(arr);
// const arr=[
//     "one",
//     "two",
//     "three",,
// ];
// console.log(arr.length);
// const sparseArray=[1,,,4,5,,];
// console.log(sparseArray);
// console.log(sparseArray.length);

// const person={
//     firstname:"john",
//     lastname:"doe",
//     age:5,
// }
// console.log(person);
// const person={
//     firstname:"john",
//     , //syntax error
//     age:5,
// }
// console.log(person);

// function createRectangle(
//     w,
//     h
    
// ){/*...*/}






