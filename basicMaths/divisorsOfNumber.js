const getDivisors=(num)=>{
    let sqrt=Math.sqrt(num)
    console.log(sqrt)
    let divisors=[]
    for (let i=1;i<=sqrt;i++){
        if(num%i===0){
            divisors.push(i)
            if(i!==(num/i)){
                divisors.push(num/i)
            }
        }
    }
    return divisors
}
console.log(getDivisors(17))