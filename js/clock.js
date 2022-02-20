const clock = document.querySelector("#clock");
const AM_PM_CLOCK = 12;

function getClock() {
  const date = new Date();
  const month = String(date.getMonth()+1);
  const day = String(date.getDate());
  const amHours = String(date.getHours()).padStart(1, "0");
  const pmHours = String(date.getHours()-AM_PM_CLOCK).padStart(1, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  //const seconds = String(date.getSeconds()).padStart(2, "0");
  if(amHours <= AM_PM_CLOCK) {
    clock.innerText = `${month}월 ${day}일\n오전 ${amHours}:${minutes}`;
  } else {
    clock.innerText = `${month}월 ${day}일\n오후 ${pmHours}:${minutes}`;
  }
}

getClock();
setInterval(getClock, 1000);