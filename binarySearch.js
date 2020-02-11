//Binary search certain value from sorted array
//function takes array and the value we are looking for as a parameter
const binarySearch = (arr, x) => {

    let start = 0;
    let end = arr.length - 1;
    //counter is just to see how effective algorithm is
    counter = 0;
   

    while(start <= end){
        counter++;
        //let's find middle point
        let mid = Math.round((start + end) / 2);
        if(x == arr[mid] ){
            console.log('Found on round number ' + counter);
            return mid;
        }else if(x < arr[mid]){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    //value was not found so we return -1
    console.log('Rounds done ' + counter);
    return -1;
}

//sorted array
let sortedArr = [2, 6, 13, 21, 36, 47, 63, 81, 97];

console.log(binarySearch(sortedArr, 6));