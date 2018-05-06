const timerElem = document.getElementById('timer');
const minutesInput = document.getElementById('minutesInput');
const secondsInput = document.getElementById('secondsInput');
let timer = new Pomodoro(0);

function setTimer() {
  timer.stop = true;
  timer = new Pomodoro(minutesInput.valueAsNumber, secondsInput.valueAsNumber);
  timer.timeout(timer.seconds);
}

function Pomodoro(minutes, seconds=0) {
  
  this.seconds = (minutes*60) + seconds;
  
  this.timeout = (seconds) => {
    setTimeout(() => {
      if(this.stop === true || seconds === 0) {
        return;
      } else {
        console.log(parseInt(seconds/60) + ":" + ((seconds%60).toString().length === 1 ? "0" + (seconds%60).toString() : seconds%60));
        timerElem.innerHTML = parseInt(seconds/60) + ":" + ((seconds%60).toString().length === 1 ? "0" + (seconds%60).toString() : seconds%60);
        this.seconds--;
        this.timeout(this.seconds);
      }
    }, 1000);
  };
  
  this.stop = false;
  
}

timer.timeout(timer.seconds);