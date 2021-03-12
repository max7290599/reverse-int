module.exports = function reverse (n) {
let reverseNum;
for(; n; n = Math.floor(n / 10)) {
    reverseNum *= 10;
    reverseNum += n % 10;
}
return reverseNum;
}
