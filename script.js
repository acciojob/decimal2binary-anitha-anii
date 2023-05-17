function decimalToBinary(decimal) {
  const binary = decimal.toString(2);
  return binary;
}


const decimalNumber = 33;
const binaryNumber = decimalToBinary(decimalNumber);
console.log(binaryNumber);