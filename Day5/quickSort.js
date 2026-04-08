function QuickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return 0;
    let pivot =arr[left];

    let k=left+1;
    for (let i = left+1; i < arr.length; i++) {
        if(arr[i] < pivot){
            [arr[i] , arr[k]] = [arr[k] , arr[i]]
            // console.log(arr);
            k++;
        }     

    }
    [arr[left] ,arr[k-1] ] = [arr[k-1] , arr[left]];
    // console.log(arr);
    QuickSort(arr, left , k-2);
    QuickSort(arr, k , right)
    return arr;
}
// [7, 3, 9, 1, 5]
//  *  i
console.log(QuickSort([4, 7, 3, 9, 1, 5]));