const reverseNum=(number)=>{
    let n=number;
    let rev=0
    while(n>0){
        rev=rev*10+n%10;
        n=parseInt(n/10);
    }
    console.log(rev)
}
reverseNum(927)