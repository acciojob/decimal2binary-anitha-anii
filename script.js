function decimalToBinary(decimal) {
  let binary = "";
  if (decimal === 0) {
    binary = "0";
  }
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}

// Example usage
const decimal = 33;
const binary = decimalToBinary(decimal);
console.log(binary);

