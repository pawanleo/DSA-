const isPrime=(num)=>{
    let sqrt=Math.sqrt(num)
    if(num<=1){
        return false
    }
    for(let i=2;i<=sqrt;i++){
        if(num%i===0){
            return false
        }
    }
    return true
}
console.log(isPrime(17))