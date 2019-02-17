/*zero to mastery exercise*/

arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,"7","90","99",20]

function cleanTheRoom([...arr]) {

    arr.sort(function (a, b) { return a - b; });
    //sort array first

    let arr2 = []; //temporary array for identical numbers
    let arr3 = []; //final compiled array
    let strarr = []; //string array


    for (let i = 0; i < arr.length; i++) {
        if (i === 0 && arr[i] === arr[i + 1]) {
                arr2.push(arr[i]);
                //checks identity of first element with second
            }
            else if (arr[i] === arr[i + 1]) {
                arr2.push(arr[i]);
                //regular progressive identity checker
            }
                else if (arr[i + 1] != arr[i] && arr[i] === arr[i - 1]) {
                    arr2.push(arr[i]);
                    arr3.push([...arr2]);
                    arr2 = [];
                    //serves as identical elements array closer
                }
                    else if(typeof(arr[i]) != "number"){
                        strarr.push(arr[i]);
                        //string organizer
                    }
                        else {
                            arr3.push(arr[i]);
                            //pushes to array if there is no identcal element
                        }
    }
        arr3.push([...strarr]);
        strarr = [];
        //pushes string array and empties it
        return arr3;
}
cleanTheRoom([...arr]);