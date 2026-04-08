function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let f1 = {};
    let f2 = {};

    for (let i = 0; i < arr1.length; i++) {
        f1[arr1[i]] = (f1[arr1[i]] || 0) + 1;
    }
    for (let i = 0; i < arr2.length; i++) {
        f2[arr2[i]] = (f2[arr2[i]] || 0) + 1;
    }

    for (let key in f1) {
        if (!(key ** 2 in f2)) {
            return false
        }
        if (f2[key ** 2] !== f1[key]) {
            return false;
        }
    }
    return true;
}
console.log(same([1, 2, 3], [4, 1, 9]));

// *****************************************************************

function validAnagram(str1, str2) {
    let f1 = {};
    let f2 = {};
    if (str1.length !== str2.length) {
        return false
    }
    for (let i = 0; i < str1.length; i++) {
        f1[str1[i]] = (f1[str1[i]] || 0) + 1
    }
    for (let i = 0; i < str2.length; i++) {
        f2[str2[i]] = (f2[str2[i]] || 0) + 1
    }
    for (let k in f1) {
        if (!(k in f2)) {
            return false;
        }
        if (f2[k] !== f1[k]) {
            return false
        }
    }
    return true;
}

console.log(validAnagram('anagram', 'nagaram'));
// **************************************************************************


function sumZero(sortedArr) {

    let l = 0;
    let r = sortedArr.length - 1;
    let res = [];
    while (l < r) {
        if (sortedArr[l] + sortedArr[r] === 0) {
            res.push(sortedArr[l]);
            res.push(sortedArr[r]);
            return res;
        } else if (sortedArr[l] + sortedArr[r] > 0) {
            r--
        } else {
            l++;
        }
    }
    return undefined;
}
console.log("sumzero:", sumZero([-2, 0, 1, 3]));
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
// ****************************************************************************

function countUniqueValues(sortedArr) {
    let i = 0;
    for (let j = 1; j < sortedArr.length; j++) {
        if (sortedArr[j] !== sortedArr[i]) {
            i++;
            sortedArr[i] = sortedArr[j]
        }
    }
    return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
// ***************************************************************************
function maxSubArr(arr, num) {
    let max = 0;
    let tempsum = 0;

    if (arr.length < num)
        return null;

    for (let i = 0; i < num; i++)
        max += arr[i];
    tempsum = max;

    for (let i = num; i < arr.length; i++) {
        tempsum = tempsum + arr[i] - arr[i - num];
        max = Math.max(max, tempsum);
    }
    return max;
}
console.log(maxSubArr([1, 2, 3, 4, 5, 6], 3))
// *******************************************************************

function minSubArrayLen(arr, target) {
    let start = 0;
    let sum = 0;
    let minLen = Infinity;


    for (let end = 0; end < arr.length; end++) {
        sum += arr[end];
        while (sum >= target) {
            minLen = Math.min(minLen, end - start + 1);
            sum -= arr[start];
            start++;
        }
    }
    if (minLen === Infinity) {
        return 0;
    } else {
        return minLen
    }
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
// **************************************************************

function findLongestSubstring(str) {
    let start = 0;
    let f = {};
    let maxLen = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (f[ch] >= start) {
            start = f[ch] + 1;
        }
        f[ch] = i;
        maxLen = Math.max(maxLen, i - start + 1);
    }
    return maxLen;

}
// r  ithmsc h ool
// i,s  
console.log(findLongestSubstring('rithmschool'));
