const args = process.argv.slice(2);
const s = args[0] || "";
const findLongestCommonSubstring = (s) => {
    for (let n = s.length; n > 0; ) {
        for (let e = 0; e <= s.length - n; e++) {
            if (args.every((t) => t.includes(s.substr(e, n)))) {
                return s.substr(e, n);
            }
        }
        n--;
    }
    return "";
};
console.log(findLongestCommonSubstring(s));
