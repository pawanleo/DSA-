const armStrongNumber=(num)=>{
let sum =0
let n=num
let rem=0
while(n>0){
    rem=n%10
    sum+=rem*rem*rem
    n=parseInt(n/10)
}
if(sum===num){
    console.log(`${num} is an armstrong number`)
}else{
    console.log(`${num} is not an armstrong number`)
}
}
armStrongNumber(33)