
export const binarySearch = (value: number,arr: Array<{date: number}>) => {

    let left: number = 0;
    let right: number = arr.length - 1;
    let mid: number;

    while (left <= right) {
        mid = Math.round((right - left)/2 + left);

        if (value === arr[mid].date) {
            return mid;
        } else if (value < arr[mid].date) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

