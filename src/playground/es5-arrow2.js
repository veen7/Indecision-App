const multiplier = {
    numbers : [2,4,6],
    multiplyBy : 3,
    multiply(){
        return this.numbers.map( number => number * this.multiplyBy )
    }

}

console.log(multiplier.multiply())