function runTime() {
    const date = new Date();
    let hours = date.getHours(); //0-23
    let minutes = date.getMinutes(); //0-59
    let seconds = date.getSeconds(); //0-59
  
    const secHand = document.querySelector(".sec");
    const minuteHand = document.querySelector(".min");
    const hourHand = document.querySelector(".hour");

    //movements
    secHand.style.transform = `rotate(${(6*seconds)+1}deg)`; //adding the +1 is optional. I just needed a perfecton sync with the dashes
    minuteHand.style.transform = `rotate(${(6*minutes)+1}deg)`;
    hourHand.style.transform = `rotate(${(6*hours)+1}deg)`;

    setTimeout(runTime, 1000);
  }

  runTime();