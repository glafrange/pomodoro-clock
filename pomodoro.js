  //node
//var args = process.argv.map(arg => parseInt(arg)).splice(2);
//let timer = new Pomodoro(...args);

const timerElem = document.getElementById('timer');
let timer = new Pomodoro(5, 10);

function Pomodoro(minutes, seconds=0) {
  
  this.seconds = (minutes*60) + seconds;
  
  this.timeout = (seconds) => {
    setTimeout(() => {
      if (seconds === 0) {
        console.log('done');
      } else {
        console.log(parseInt(seconds/60) + ":" + ((seconds%60).toString().length === 1 ? "0" + (seconds%60).toString() : seconds%60));
        timerElem.innerHTML = parseInt(seconds/60) + ":" + ((seconds%60).toString().length === 1 ? "0" + (seconds%60).toString() : seconds%60);
        this.timeout(seconds - 1);
      }
    }, 1000);
  };
}

timer.timeout(timer.seconds);