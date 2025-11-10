let hrs = document.getElementsByClassName("hr");
let mins = document.getElementsByClassName("min");
let secs = document.getElementsByClassName("sec");

updateTime();
setInterval(updateTime, 1000);

function updateTime() {
  let currentTime = new Date();

  for (let i = 0; i < hrs.length; i++) {
    hrs[i].innerHTML =
      (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  }
  for (let i = 0; i < mins.length; i++) {
    mins[i].innerHTML =
      (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  }
  for (let i = 0; i < secs.length; i++) {
    secs[i].innerHTML =
      (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
  }
}
