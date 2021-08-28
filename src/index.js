// You should implement your task here.

module.exports = function towelSort(matrix) {
    let newArr = [];
    if (!matrix) {
        return newArr;
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i === 0 || i % 2 === 0) {
                for (let y = 0; y < matrix[i].length; y++) {
                    newArr.push(matrix[i][y]);
                }
            } else {
                for (let y = matrix[i].length - 1; y >= 0; y--) {
                    newArr.push(matrix[i][y]);
                }
            }
        }
        console.log(newArr);
        return newArr;
    }
};
