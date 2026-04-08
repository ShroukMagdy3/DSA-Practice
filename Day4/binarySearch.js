function binarySearchIterative(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((right + left) / 2);

        if (arr[middle] === target) {
            return middle
        } else if (arr[middle] < target) {
            left = middle + 1;
        }
        else {
            right = middle - 1;
        }
    }
    return -1;
}



function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] === target){
        return mid;
    }
    else if (arr[mid] > target) {
        return binarySearchRecursive(arr, target , left , mid - 1)
    }else{
        return binarySearchRecursive(arr, target , mid+1 , right )
    }
}


let arr = [1, 3, 5, 7, 9];

console.log(binarySearchIterative(arr, 7));
console.log(binarySearchRecursive(arr, 7)); 