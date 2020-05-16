/**
 * Given an array and chunk size, divide the array into many subarrays
 * where each subarray is of length size
 *
 * @param {Array} array
 * @param {number} size
 * @return {Array}
 */
const arrayChunk = (array, size) => {
    const result = [];

    for (let i = 0; i < Math.floor(array.length / size); ++i) {
        const start = i * size;
        result.push(array.slice(start, start + size));
    }

    if (array.length % size !== 0) {
        result.push(array.slice(-(array.length % size)));
    }

    return result;
};
