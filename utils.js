export const isLegal=(n)=>{
    const digits=n.split("")
    if(digits.length!==4) return false
    let s=""
    return digits.every(element => {
        if(s.indexOf(element)>=0) return false
        s=s+element
        return true
    });
}
export const resetNumbersSet=()=>{
let numbers=[]
for(let i=0;i<=9876;i++){
    let j=""+i;
    if(j.length===3) j="0"+j;
    if(isLegal(j)) numbers.push(j)
}
return numbers
}