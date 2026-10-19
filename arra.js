const array =[123, 456, 789, 672, 420, 270, 110]
const arr =[]
let sum = 0
array.forEach( (el) => {
    if (el >= 250)
    {
        arr.push(el)
    }
})
console.log(arr)
arr.forEach( (el) => {
    sum += el
})
console.log(sum)
console.log(sum/arr.length)