function decimalToBinary(decimal) {

  let binary = "";
  if (decimal === 0) {
    return "0";
  }
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}

// Test the function with example inputs
const decimal1 = 7;
const binary1 = decimalToBinary(decimal1);
console.log(`Decimal: ${decimal1}\nBinary: ${binary1}\n`);

const decimal2 = 10;
const binary2 = decimalToBinary(decimal2);
console.log(`Decimal: ${decimal2}\nBinary: ${binary2}\n`);

const decimal3 = 33;
const binary3 = decimalToBinary(decimal3);
console.log(`Decimal: ${decimal3}\nBinary: ${binary3}`);
