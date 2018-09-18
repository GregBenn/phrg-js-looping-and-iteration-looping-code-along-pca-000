// Code your solutions in this file
function printBadges(employeeName) {
  for (let i = 0; i < employeeName.length; i++) {
    console.log(`Welcome ${employeeName[i]}! You are employee #${i + 1}.`);
  }
  return employeeName;
}

function tailsNeverFails() {
  let numberOfCoinFlips = 0;

  while (Math.random() >= 0.5) {
    numberOfCoinFlips++;
  }

  return `You got ${numberOfCoinFlips} tails in a row!`;
}

// function flip() {
//   let coinFlip;

//   if (Math.random() >= 0.5) {
//     return coinFlip = "Tails";
//   } else {
//     return coinFlip = "Heads";
//   }
// }
