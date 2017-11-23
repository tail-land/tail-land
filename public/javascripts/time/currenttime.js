console.log("entra en current time");
console.log(myTail);

  let seconds= myTail.time_max * 60;

  // Calcula la fecha de finalización del contador sumando
  // el número de segundos a la fecha actual
  let end = (new Date()).getTime() + seconds * 1000;
  displayCounter();
  let timeout = setInterval(displayCounter, 300);

  function displayCounter(){
    // Calcula el número de segundos que faltan para llegar a la fecha de finalización
    let counter = Math.floor((end - (new Date()).getTime()) / 1000);
    if (counter < 0) counter = 0;

    document.getElementById('demo').innerHTML =
        Math.floor(counter / 60) + ':' +
        ('00' + Math.floor(counter % 60)).slice(-2);

    if (counter === 0) {
        clearTimeout(timeout);
        document.getElementById('demo').innerHTML = "Time out!!";

    };
  }
