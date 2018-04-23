class Person{
    constructor(name , age = 0){
        this.name = name,
        this.age = age
    }

    getDescription(){
        return `${this.name} is ${this.age} years old `
    }
}


let me = new Person('Andrew Mead' , 26)
console.log(me.getDescription())
let him = new Person('Andrew ' )
console.log(him.getDescription())