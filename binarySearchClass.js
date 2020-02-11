class BinSearch{
    constructor(arr){
        this.arr = arr;
    }

    searchBin(numba){

        let start = 0;
        let end = this.arr.length - 1;

        while(start <= end){
            let mid = Math.round((start + end)/2);
            if (this.arr[mid] == numba){
                return mid;
            }else if (this.arr[mid] > numba){
                end = mid - 1;
            }else {
                start = mid + 1;
            }
        }
        //Was not found returning -1
        return -1;
        
    }

}

//sorted array
let sortedArr = [2, 6, 13, 21, 36, 47, 63, 81, 97];

let trashCan = new BinSearch(sortedArr);
console.log(trashCan.searchBin(81));