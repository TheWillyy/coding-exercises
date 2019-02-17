//creates an array with random numbers and searches through with user input

    let count = 0;
    let arr = [];
    

    for (i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 50));
    }
    console.log(arr);

    num = parseInt(prompt("Enter the number you wish to search for"));
    for (i = 0; i<arr.length; i++) {
        if (arr[i] === num) {   
            count += 1;
        }
    }
    console.log(`Your number occured ${count} times`);
