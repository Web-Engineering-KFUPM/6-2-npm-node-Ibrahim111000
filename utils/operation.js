export function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
  return numbers.reduce((result, num) => result - num);
}

export function multiply(numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

export function divide(numbers) {
  return numbers.reduce((result, num) => {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    return result / num;
  });
}