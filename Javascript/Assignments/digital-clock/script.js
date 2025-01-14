function showTime() {
    let date = new Date();
    let hours = date.getHours(); //0-23
    let minutes = date.getMinutes(); //0-59
    let seconds = date.getSeconds(); //0-59
  
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
  
    let time = document.getElementById("clock-cont");
    time.innerHTML = `<span>${hours}</span>:<span>${minutes}</span>:<span>${seconds}</span>`;

    let format = convertFormat(hours);
    hours = checkTime(hours);
    time.innerHTML = `<span>${hours}</span>:<span>${minutes}</span>:<span>${seconds}</span> <span>${format}</span>`;
    
    setTimeout(showTime, 1000);
  }
  
  function convertFormat(time) {
    let format = "AM";
    if (time >= 12) {
      format = "PM";
    }
    return format;
  }
  
  function checkTime(time) {
    if (time > 12) {
      time = time - 12;
    }
    if (time === 0) {
      time = 12;
    }
    return time;
  }
  
  function addZero(time) {
    if (time < 10) {
      time = "0" + time;
    }
    return time;
  }
  
  showTime();