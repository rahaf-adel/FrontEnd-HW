function summation(num){
    sum = 0
    for(i=1;i<=num;i++){
        sum += i
    }
    return sum
}


console.log(summation(5))

function summationEven(num){
    sum = 0
    for(i=1;i<=num;i++){
        if(i%2==0){
            sum += i
        }
    }
    return sum
}
console.log(summationEven(5))