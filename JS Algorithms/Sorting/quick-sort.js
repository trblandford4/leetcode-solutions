const quickSort = arr => {
    // Base case arr has less than 2 elems, so it is sorted
    if (arr.length < 2) return arr;

    // Chose a random elem to pivot from
    const pivot = arr[Math.floor(Math.random() * arr.length)];

    // Create partitions of elems greater than, less than, or equal to pivot val
    let left = [];
    let equal = [];
    let right = [];
    for (let elem of arr) {
        if (elem < pivot) left.push(elem);
        else if (elem > pivot) right.push(elem);
        else equal.push(pivot);
    }

    // Recusively sort left and right elems, and merge back in sorted order. 
    return quickSort(left).concat(equal).concat(quickSort(right));
};