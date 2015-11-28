var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function parse(numberString) {
  return parseInt(numberString);
}


function addNumbers(sum, numsLeft, completionCallback) {
  var currentSum = sum;
  // reader.question("question?", function(answer){})

  if (numsLeft === 0 ) {
    completionCallback(currentSum);
    reader.close();
  } else {
    reader.question("Enter a number", function(answer) {
      currentSum += parse(answer);
      console.log(currentSum);
      addNumbers(currentSum, numsLeft-1, completionCallback);
    });
  }

}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
