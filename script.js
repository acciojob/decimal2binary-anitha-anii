function decimalToBinary(decimal) {
  let binary = '';

  while (decimal > 0) {
    const remainder = decimal % 2;
    binary = remainder + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}


console.log(decimalToBinary(7));   
console.log(decimalToBinary(10));  
console.log(decimalToBinary(33));  
