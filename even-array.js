var numbers = [10,20,25,35];
function findEven(numbers){
    return numbers.filter(n => n%2 ==0);
}
console.log(findEven(numbers));