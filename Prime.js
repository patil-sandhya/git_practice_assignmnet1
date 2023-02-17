let num=13;
let count=0
for(let i=0;i<=num;i++){
    if(i%num==0){
        count++
    }
}
if(count == 1){
    console.log("prime")
}
console.log(count)