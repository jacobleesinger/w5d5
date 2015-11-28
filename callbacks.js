function Clock () {
  // 1. Create a Date object.
  // 2. Store the hours, minutes, and seconds.
  // 3. Call printTime.
  // 4. Schedule the tick at 1 second intervals.
  this.dateObject = new Date(Date.now());

  console.log(this);
  var clockObject = this;
  var bound = clockObject._tick.bind(clockObject);
  setInterval(bound, 1000);
  clockObject.printTime();

}

Clock.prototype.printTime = function () {
  // Format the time in HH:MM:SS
  // Use console.log to print it.
  // console.log(this);
  var timeString = this.dateObject.getHours() + ":" + this.dateObject.getMinutes() + ":" + this.dateObject.getSeconds();
  console.log(timeString);
};

Clock.prototype._tick = function () {
  // 1. Increment the time by one second.
  // 2. Call printTime.
  // console.log(this);
  this.dateObject.setSeconds(this.dateObject.getSeconds() + 1)
  this.printTime();

};

var clock = new Clock();
