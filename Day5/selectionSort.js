
function selection(arr) {
    let mn =0;
    for (let i = 0; i < arr.length-1; i++) {
        mn =i ;
        for(let j=i+1 ; j<arr.length ; j++){ 
            if(arr[j] <arr[i]){
                [arr[j] , arr[i] ] = [arr[i] , arr[j]];
                mn = j;
            }
        }
    }
    return arr;
}
console.log(selection([60, 20,12,4]));
