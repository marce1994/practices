function intervalIntersection(firstList: number[][], secondList: number[][]): number[][] {
    const result: number[][] = [];
    let firstIndex = 0;
    let secondIndex = 0;
    while (firstIndex < firstList.length && secondIndex < secondList.length) {
        const firstInterval = firstList[firstIndex];
        const secondInterval = secondList[secondIndex];
        const start = Math.max(firstInterval[0], secondInterval[0]);
        const end = Math.min(firstInterval[1], secondInterval[1]);
        if (start <= end) {
            result.push([start, end]);
        }
        if (firstInterval[1] < secondInterval[1]) {
            firstIndex++;
        } else {
            secondIndex++;
        }
    }
    return result;
}

console.log(intervalIntersection([[1, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]]));
// Expected: [[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]]
console.log(intervalIntersection([[1, 3], [2, 6], [3, 4], [6, 9]], [[1, 3], [5, 6], [6, 7], [8, 10]]));
// Expected: [[1, 3], [5, 6], [6, 6], [8, 10]]
console.log(intervalIntersection([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [[4, 10], [11, 15]]));
// Expected: [[4, 5], [11, 12], [15, 16]]