/**
 * Given a string s containing only digits.
 * Return all possible valid IP addresses that can be obtained from s.
 * You can return them in any order.
 *
 * A valid IP address consists of exactly four integers,
 * each integer is between 0 and 255,
 * separated by single points and cannot have leading zeros.
 * For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses
 * and "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
 *
 * Input: s = "25525511135"
 * Output: ["255.255.11.135","255.255.111.35"]
 *
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = (s) => {
    if (s.length < 4 || s.length > 12) {
        return [];
    }

    const getChunk = (start, len, part) => {
        let substr = s.substring(start, start+len);
        const num = parseInt(substr);
        const res = [];

        if (num <= 255 && (num === 0 && substr.length === 1 || s[start] !== '0')) {
            if (part === 4) {
                return start + len >= s.length ? [substr] : [];
            }

            let counter = Math.min(3, s.length - start - len);
            while (counter) {
                const lastPart = getChunk(start+len, counter, part + 1);
                lastPart.forEach(part => res.push(substr + '.' + part));
                --counter;
            }
        }

        return res;
    };

    const res = [];
    let counter = 3;
    while (counter) {
        const lastPart = getChunk(0, counter, 1);
        lastPart.forEach(part => res.push(part));
        --counter;
    }

    return res;
};
