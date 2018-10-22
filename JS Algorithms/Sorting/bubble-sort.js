// Time Complexity: O(n^2)
const bubbleSort = arr => {
    // Loop through each elem
    for (let i = 0; i < arr.length - 1; i++) {
        // check if elem was switched during this pass
        let change = false;
        // Don't check sorted section of arry
        for (let j = 0; j < arr.length - (i + 1); j++) {
            // perform switch if data is unsorted and update change flag
            if (arr[j] > arr[j + 1]) {
                change = true;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        // No change, array is sorted we can break early 
        // slight optimization for nearly sorted data
        if (!change) break;
    }
    return arr;
};