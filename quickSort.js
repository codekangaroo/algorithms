function quickSort(arr, start, end){
     //we do quicksort until start and end have crossed
     console.log('start ' + start + ' end ' + end);
     if(start < end){
         let partitionIndex = partition(arr, start, end);
         quickSort(arr, start, partitionIndex - 1);
         quickSort(arr, partitionIndex + 1, end);
     }
}

function partition(arr, start, end) {
    let pivot = arr[end];
    let partitionIndex = start;
    for(let i = start; i < end; i++){
        if(arr[i] < pivot){
            if(arr[i] != arr[partitionIndex]){
                swap(arr, i, partitionIndex);
            }
           
            partitionIndex++;
        }
    }
    if(arr[partitionIndex] != arr[end]){
        swap(arr, partitionIndex, end);
    }
   
    return partitionIndex;
}

function swap(arr, indexA, indexB){
    console.log('we are swapping ' + arr[indexA] + ' and ' + arr[indexB]);
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
    console.log(arr);
}

let arry = [7, 2, 1, 6, 8, 5, 3, 4];
quickSort(arry, 0, arry.length-1);
console.log(arry);