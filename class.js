//class and objects
// class className{
//     constructor(prop1,prop2){
//         this.prop1=prop1;//class attribute=
//         this.prop2=prop2//this refer to the current calling object
//     }
// }
// let obj=new className("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);
//this keyword refer to the object it belongs to,so it is the first property of the instances of class Name
// class Dog{
//     constructor(dogname,weight,color,breed){
//         this.dogname=dogname;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }
// let dog =new Dog("javascript",2.4,"brown","chichua");
// console.log(dog.dogname);
// console.log(dog.weight);
// console.log(dog.color);
// console.log(dog.breed);



//classes
//there can be only one constructor in the class.
//it is the convention to start the class name with the capital letter
// class Person{
//     constructor(firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
//     }
// }
// let p=new Person ("kajal","singh");
// console.log(p.firstname);
// console.log(p.lastname);
// console.log("hi",p.firstname);


//methods


// function on a clas sare called methods ,when defining thes ekeywords ,we dont need to use the function keyword and we directly start with the name


// class Person{
//         constructor(firstname,lastname){
//             this.firstname=firstname;
//             this.lastname=lastname;
        
//         }
    
//     greet(){
//         console.log("hi there i am", this.firstname);
//     }
//     complement(name,object){
//         return("thats wonderful"+object+ " " +name)
//     }
// }
// let p=new Person ("kajal","singh");
// let complement=p.complement("harry","hat");
// console.log(complement);   

//hiding the real scenerio is abstraction focus on essential thing leave the other thing
//constructor is initialise the object automatically


//properties

//properties also cxalled fields hold the data of the class
// class person{
//     constructor (firstname,lastname){
//         this.firstname=firstname;
//         this.lastname=lastname;
// }
// }
// let p=new person ("kajal","singh");
// console.log("hi",p.firstname);
//private
// class person{
//     #firstname;
//     #lastname;

// constructor(firstname,lastname){
//     this.#firstname=firstname;
//     this.#lastname=lastname;
// }
// }
// let p=new person ("kajal","singh");
// console.log("hi",p.firstname);
//no value is return class is undefined
// class Person {
//     #firstname;
//     #lastname;

//     constructor(firstname, lastname) {
//         if (firstname.startsWith("M")) {
//             this.#firstname = firstname;
//         } else {
//             this.#firstname = "M" + firstname;
//         }
//         this.#lastname = lastname;
//     }

//     getData() {
//         return First Name: ${this.#firstname}, Last Name: ${this.#lastname};
//     }
// }

// let p = new Person("kay", "Moon");
// console.log(p.getData());

  

//seters and getters get always return set always reinitialise attribute
//private menthod acces by methods
//public acces by the object

// class person{
//     #firstname;
//     #lastname;
//     constructor(firstname,lastname){
//             this.#firstname=firstname;
//              this.#lastname=lastname;
//         }
//         get firstname(){
//             return this.#firstname;
//         }
//         set firstname(firstname){
//             this.#firstname=firstname;
//         }
//         get lastanme(){
//             return this.#lastname;
//         }
//         set lastname(lastname){
//             return this.#lastname;
//         }
//     }
// let p=new person("kajal","singh");
// p.firstname="kajal";
// console.log(p.firstname);


// get and set is used to data hidding by directy enscapsulationget and set



// INHERITENCE== reusability of the code.


// it is the concept that class can have child class that inherit the property and method from the parent class
// class Vehicle {
//     constructor(color,currentspeed,maxspeed){
//         this.color=color;
//         this.currentspeed=currentspeed;
//         this.maxspeed=maxspeed;
//     }
//     move(){
//         console.log("moving at",this.currentspeed);
//     }
//     accelarate(amount){
//         this.currentspeed +=amount;
//     }
// }
// class Motorcycle extends Vehicle{
//     constructor(color,currentspeed,maxspeed,fuel){
//         super(color, currentspeed,maxspeed);
//         this.fuel=fuel;
//     }
//     doWheelie(){
//         console.log("driving on onewheel");
//     }
// }
// let motor = new Motorcycle("black",0,250,"gasoline");
// console.log(motor.color);
// motor.accelarate(50);
// motor.move();
// we can not access any Motorcycle specific properties or methods in our vehicle class
// parent is not extend the child class


//PROTOTYPES


//is the mechanism in js that makes it possible to have object then nothing specified ehen creating a class the object inherit from the object


// class Person{
//         constructor(firstname,lastname){
//             this.firstname=firstname;
//             this.lastname=lastname;
        
//         }
    
//     greet(){
//         console.log("hi there i am", this.firstname);
//     }

// }
// Person.prototype.introduce=function(){
//     console.log("hii i am", this.firstname);
// };
// Person.prototype.favoritecolor="green";
// let p=new Person("kajal " ,"singh");
// console.log(p.favoritecolor);
// p.introduce();


