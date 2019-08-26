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

export const bullsCows=(numberSecret,numberGuessed)=>{
    const n1=numberSecret.split("")
    const n2=numberGuessed.split("")
    let bulls=0
    let cows=0
    n2.forEach((element,index)=> {
      const i=n1.indexOf(element)
        if(i===index) bulls++;else if(i>=0) cows++
    });
    return {bulls,cows}
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
    