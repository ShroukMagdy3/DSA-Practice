function bubbleSorting(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j= 0; j<arr.length-i-1 ; j++){
            if(arr[j] > arr[j+1]){
                [arr[j+1] , arr[j]]=[arr[j] , arr[j+1]];
            }
        }
    }
    return arr; 
}
function bubbleSorting2(arr){
    let swapped;
    for(let i=0; i<arr.length-1; i++){
        swapped = false
        for(let j= 0; j<arr.length-i-1 ; j++){
            if(arr[j] > arr[j+1]){
                swapped = true ;
                [arr[j+1] , arr[j]]=[arr[j] , arr[j+1]];
            }
        }
        if(!swapped) break;
    }
    return arr; 
}
console.log(bubbleSorting2([100, 60, 30]));
console.log(bubbleSorting([100, 60, 30]));

