// O(n log n)
function mergeSort(arr ){
    if(arr.length <=1  ) return arr;
    
    let mid= Math.floor(arr.length /2);
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice( mid))
    let res =[];
    let i =0  , j=0;
    while(i <left.length && j<right.length){
        if(left[i] > right[j]){
            res.push(right[j]);
            j++
        }else{
            res.push(left [i])
            i++
        }
    }
    return [...res , ...left.slice(i) ,...right.slice(j)]
}



let arr = [100, 60, 30, 10];
console.log(mergeSort(arr));