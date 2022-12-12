let numbers = [1, 4, 5, 6, 8, 10, 3, 2, 10, 9, 8];
console.log(numbers)
for (n = 0; n < numbers.length; n++) {
    if ( numbers[n] % 2 == 0) {
        numbers[n] = numbers[n] + 4;
    } else {
        numbers[n] = numbers[n] - 5;
    }
}
console.log(numbers);
