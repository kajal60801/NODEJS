//class and objects
// class className{
//     constructor(prop1,prop2){
//         this.prop1=prop1;//class attribute=
//         this.prop2=prop2
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


class Person{
        constructor(firstname,lastname){
            this.firstname=firstname;
            this.lastname=lastname;
        
        }
    
    greet(){
        console.log("hi there i am", this.firstname);
    }
    complement(name,object){
        return("thats wonderful"+object+ " " +name)
    }
}
let p=new Person ("kajal","singh");
let complement=p.complement("harry","hat");
console.log(complement);   
    