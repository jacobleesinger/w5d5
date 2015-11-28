var HanoiGame = function() {
  this.stacks = [[3, 2, 1], [], []];
};

var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


HanoiGame.prototype.isWon = function () {
  if (this.stacks[1].length === 3 || this.stacks[2].length === 3) {
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
  var startTower = this.stacks[startTowerIdx];
  var endTower = this.stacks[endTowerIdx];

  if (startTower.length === 0) {
    return false;
  } else if (endTower.length === 0){
    return true;
  } else {
    if (startTower[startTower.length - 1] < (endTower[endTower.length - 1])) {
      return true;
    } else {
      return false;
    }
  }
};

HanoiGame.prototype.move = function (startTowerIdx, endTowerIdx) {
  var startTower = this.stacks[startTowerIdx];
  var endTower = this.stacks[endTowerIdx];
  var that = this;

  if (this.isValidMove(startTowerIdx, endTowerIdx)) {
    endTower.push(startTower.pop());
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.print = function () {
  console.log(JSON.stringify(this.stacks));
};

HanoiGame.prototype.promptMove = function(callback) {
  this.print();
  reader.question("[startTower, endTower]?", function(answer) {
    var array = JSON.parse(answer);
    callback(array[0], array[1]);
  });
};

HanoiGame.prototype.run = function(completionCallback) {
  var currentGame = this;

  currentGame.promptMove(function(startTowerIdx, endTowerIdx){
    if (currentGame.move(startTowerIdx, endTowerIdx)) {
      if (currentGame.isWon()) {
          console.log("you won");
          completionCallback();
        } else {
          currentGame.run(completionCallback);
        }
    }
  });
};

var game = new HanoiGame();
game.run(function(){ return reader.close()});
