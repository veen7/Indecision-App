class Person{
    constructor(name , age = 0){
        this.name = name,
        this.age = age
    }

    getDescription(){
        return `${this.name} is ${this.age} years old `
    }

    getGreeting(){
        console.log("this is from parent");
    }
}


class Student extends Person {
    constructor(name,age,degree){
        super(name,age)
        this.degree = degree 
        console.log('student'+this.name)
        console.log('student'+this.age)
        console.log('student'+this.degree)
    }
    
    getDescription(){
        console.log("this is from child")
    }
}

class Traveler extends Person{
    constructor(name,age,homelocation='Anonymous'){
        super(name,age)
        this.homelocation = homelocation
    }

    getGreeting(){
        return `Hi. I am ${this.name} . I'm visiting form ${this.homelocation}`
    }

}

let t1 = new Traveler('Andrew',45,'Phildelphia')
console.log(t1.getGreeting())

let t2 = new Traveler('Andrew',45, undefined)
console.log(t2.getGreeting())

let me = new Person('Andrew Mead' , 26)
console.log(me.getDescription())
let him = new Person('Andrew ' )
console.log(him.getDescription())


let other = new Student('praveen',20,'CS')
other.getDescription()
