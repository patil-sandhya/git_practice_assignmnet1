let num=13;
let count=0
for(let i=0;i<=num;i++){
    if(i%num==0){
        count++
    }
}
(count==2)?console.log("Prime"):console.log("Not a prime");