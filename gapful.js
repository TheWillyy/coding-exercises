/*******************
Gapful numbers are numbers divisible by the pair of their first
and last digit.
This program detects if a number id gapful or not
Exercise source: Sololearn
👀
********************/

const gapful=(num)=>{

		const fldig=(num)=>{
			let	ld=num %10,fd=num;
			while(fd>10){
				fd=Math.floor((fd/10));
				}
				let dvsr=(fd*10 + ld);return dvsr;
		}

	if(num%fldig(num) === 0){
		console.log(`${num} is a GapFul number`)
	}else{
		console.log(`${num} is not a GapFul number`)
	}
}



