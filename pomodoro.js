function Pomodoro(minutes, seconds=0) {
  this.seconds = (minutes*60) + seconds;
  
  this.timeout = function(seconds) {
    setTimeout(() => {
      if (seconds === 0) {
        console.log('done');
      } else {
        console.log(parseInt(seconds/60) + ":" + ((seconds%60) === 0 ? "00" : seconds%60));
        this.timeout(seconds - 1);
      }
    }, 1000);
  };
}

let timer = new Pomodoro(parseInt(process.argv[2]), parseInt(process.argv[3]));

timer.timeout(timer.seconds);