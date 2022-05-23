function getIndexToIns(arr, num) {
    arr =  arr.sort((a, b) => a - b); //order the array from smallest to largest
    if (arr[0] >= num) return 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (num >= arr[i] && num <= arr[i+1]) return i+1;
    }
    return arr.length;
}
