function Pomodoro(minutes, seconds=0) {
  
  this.seconds = (minutes*60) + seconds;
  
  this.timeout = function(seconds) {
    setTimeout(() => {
      if (seconds === 0) {
        console.log('done');
      } else {
        console.log(parseInt(seconds/60) + ":" + ((seconds%60).toString().length === 1 ? "0" + (seconds%60).toString() : seconds%60));
        this.timeout(seconds - 1);
      }
    }, 1000);
  };
}

var args = process.argv.map(arg => parseInt(arg)).splice(2);

let timer = new Pomodoro(...args);

timer.timeout(timer.seconds);