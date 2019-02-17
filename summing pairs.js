/*takes a number searches through an array for summing pairs*/
//unfinished

const arr = [1,2,3,4,3,2];
let number = 6;

for(i=0; i<arr.length; i++){
    for(j=0; j<arr.length; j++){
        if(arr[i] + arr[j] === number){
            console.log([arr[i], arr[j]])
        }
    }
}