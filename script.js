function decimalToBinary(decimal) {
  let binary = '';
  while (decimal > 0) {
    const remainder = decimal % 2;
    binary = remainder + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}

/*Do not change anything below*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', function (line) {
  const decimal = parseInt(line.trim());
  const binary = decimalToBinary(decimal);
  console.log(binary);
  rl.close();
});
