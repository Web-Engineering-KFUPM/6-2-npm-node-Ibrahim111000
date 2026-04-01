import _ from "lodash"
export function parseNumbers(input) {
  if (!input) return [];

  return input
    .split(",")
    .map(num => num.trim())
    .filter(num => num !== "")
    .map(num => Number(num));
}

export function isValidOperation(operation) {
  const validOperations = ["add", "subtract", "multiply", "divide"];
  return validOperations.includes(operation);
}