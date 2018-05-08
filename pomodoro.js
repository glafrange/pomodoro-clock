const timerElem = document.getElementById('timer');
const minutesInput = document.getElementById('minutesInput');
const secondsInput = document.getElementById('secondsInput');
let timer = new Pomodoro(0);

function Pomodoro(minutes, seconds) {
  this.seconds = (minutes*60) + seconds;
  this.stop = false;
  
  this.start = (seconds) => {
    this.stopBool = false;
    setTimeout(() => {
      if(this.stopBool === true || seconds < 0) {
        return;
      } else {
        timerElem.innerHTML = parseInt(seconds/60) + ":" + ((seconds%60).toString().length === 1 ? "0" + (seconds%60).toString() : seconds%60); // Making sure the seconds always have 2 digits
        this.seconds--;
        this.start(this.seconds);
      }
    }, 1000);
  };
  
  this.stop = () => {
    this.stopBool = true;
  };
  
  this.reset = () => {
    this.stop();
    console.log(this);
    this.seconds = 0;
    this.start(this.seconds);
  };
  
  this.setTimer = () => {
    this.reset();
    console.log(timer);
    timer = new Pomodoro((isNaN(minutesInput.valueAsNumber) ? 0 : minutesInput.valueAsNumber),
                         (isNaN(secondsInput.valueAsNumber) ? 0 : secondsInput.valueAsNumber));
    minutesInput.value = '';
    secondsInput.value = '';
    timer.start(timer.seconds);
  };
}

