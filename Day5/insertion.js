function insertionSort(arr){
    for(let i = 1; i < arr.length ; i++){  // 40 |2 1 10
        let k=arr[i]; // 2
        let j= i-1;  // 0
        while(j >= 0 && arr[j] > k){
            arr[ j+1] = arr[j];
            j=j-1;
        }
        arr[j+1] = k;
    }
    return arr;
}
console.log(insertionSort([40,2,1,10]));
