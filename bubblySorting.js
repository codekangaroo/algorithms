
const bubblySort = (arr) => {
   let end = arr.length - 1;
   let counter = 0;
   let flag = false;

   do{
        flag = false;
        for(let i = 0; i < end; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                flag = true;
           }
       }
       end--;
       counter++;
       
   } while(flag);
   console.log('Number of rounds done: ' + counter);
   return arr;
};

let arr = [4, 6, 1, 0, 9, 7, 2, 3, 8, 6, 5, 10];
console.log(bubblySort(arr));




