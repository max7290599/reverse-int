module.exports = function reverse (num) {
    let result = 0;
    if (num<0) num *= -1;
    while (num) {
      result = result * 10 + num % 10;
    num = Math.floor(num / 10);
    }

    return result;
}

