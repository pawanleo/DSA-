const stars=(n)=>{
    let string=""
    for (let i=0; i<n ;i++){
        for (let j=0; j<n ;j++){
         string+='*'
        }
        string+="\n"
    }
    return string
}
console.log(stars(4))