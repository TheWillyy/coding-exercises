//PRINTS 1000 NUMBERS, ADDS SPECIAL FORMATTING TO EVERY THIRD NUMBER, PRIME NUMBER AND MULTIPLES OF TEN

  const isPrime = (num) => {
    for(a=2; a<num; a++){
        return ((num%a == 0) ? false : true)
    }
}
//prime number checker

for(i = 1; i<=1000; i++){
    if(i%10 === 0){
        document.write("<b>" + i + "</b>" + "<br/>")
        //multiples of ten
    }
    else if(i%3 === 0){
        document.write("<i>" + i + "</i>" + "<br/>")
        //multiples of three
    }
    else if(isPrime(i) != false){
        document.write("<u>" + i + "</u>" + "<br/>")
        //prime numbers
    }
    else{
        document.write(i + "<br/>")
        //regulars
    }
}