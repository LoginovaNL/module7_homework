const arr = [5, 5, 2, 1, 3, 2, 4];
        function uniqueSorted(arr) {
        const unique = [...new Set(arr)];
        const sortAsc = unique.sort((a, b) => a - b);
        return sortAsc;
        }
        const uniqueSortedArr = uniqueSorted(arr);
        console.log(uniqueSortedArr);