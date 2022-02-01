class Sum {
    constructor(array) {
        this.array = array
    }
    sumOfNumbers() {
        let sumOfNumbers = 0;
        for(let i = 0; i < this.array.length; i++) {
            if(this.array[i] % 2 === 0) {
                sumOfNumbers = sumOfNumbers + this.array[i]
            }
        }
        return sumOfNumbers
    }
}

const arrayOfNumbers = [1, 3, 17, 29, 8, 51, 26]
const sum = new Sum(arrayOfNumbers)
// console.log(sum.sumOfNumbers(arrayOfNumbers))
