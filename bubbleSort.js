//let's sort unsorted array with bubblesort

class Bubble {

    constructor(arr){
        this.arr = arr;
        //counter to find out how much work algorithm had to do
        this.counter = 0;
        //flag to indicate, if we had to do any swaps
        this.flag = false;
    }

    bubbleSort(){

        let end = this.arr.length - 1;
        //if no swaps are made (flag is false) we are done
        do{
            this.flag = false;
            for(let i = 0; i < end; i++){
                if(this.arr[i] > this.arr[i+1]){
                    //we will swap
                    let temp = this.arr[i];
                    this.arr[i] = this.arr[i+1];
                    this.arr[i+1] = temp;
                    //flag is marking that swap was done
                    this.flag = true;
                }
            }
            //we don't have to go so far any more...
            end--;
            this.counter ++;
        } while (this.flag);
        console.log('Counter: ' + this.counter);
        return this.arr;
    }
    
}

let unSortedArr = [1, 2, 3, 4, 5, 10, 5, 9, 23, 11, 8, 300, 44, 54, 60, 19, 7, 10, 1,-1, 2,
                     5 ,4 ,301 ,302 ,303 ,305];

let bob = new Bubble(unSortedArr);
console.log (bob.bubbleSort());

//Let's make sure that algorithm does not do unnecessary work with sorted array
let sortedArr = [2, 6, 13, 21, 36, 47, 63, 81, 97];
let bib = new Bubble(sortedArr);
console.log (bib.bubbleSort());

