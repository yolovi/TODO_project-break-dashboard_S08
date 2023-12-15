const timeDiv = document.getElementById("time-div");
const dateDiv = document.getElementById("date-div");
const sentenceTimeDiv = document.getElementById("sentence-div");
//console.log(sentenceTimeDiv);

//funcion que recoge la fecha actual y le aplica un metodo para convertirlo en string con formato tiempo y otro método para la fecha y después lo pinta en DOM
const nowTime = () => {
  let now = new Date().toLocaleTimeString();
  let today = new Date().toLocaleDateString();

  sentenceTime(now);

  timeDiv.innerHTML = `<p>Current Time: ${now}</p> `;
  dateDiv.innerHTML = `<p>Today's Date: ${today} </p>`;
};


const setTime = setInterval(nowTime, 1000);


const sentenceTime = () => {
  const now = new Date(); // Obtener la fecha y hora actual
  const minutosTranscurridos = now.getHours() * 60 + now.getMinutes();

  switch (true) {
    case minutosTranscurridos > 1 && minutosTranscurridos <= 420: // Desde las 00:01 hasta las 07:00
      sentenceTimeDiv.innerHTML = `<p>Es hora de descansar. Apaga y sigue mañana</p>`;
      break;

    case minutosTranscurridos >= 421 && minutosTranscurridos <= 720: // Desde las 07:01 hasta las 12:00
      sentenceTimeDiv.innerHTML = `<p>Buenos días, desayuna fuerte y a darle al código</p>`;
      break;

    case minutosTranscurridos >= 721 && minutosTranscurridos <= 840: // Desde las 12:01 hasta las 14:00
      break;

    case minutosTranscurridos >= 841 && minutosTranscurridos <= 960: // Desde las 14:01 hasta las 16:00
      sentenceTimeDiv.innerHTML = `<p>Espero que hayas comido</p>`;
      break;

    case minutosTranscurridos >= 961 && minutosTranscurridos <= 1080: // Desde las 16:01 hasta las 18:00
      sentenceTimeDiv.innerHTML = `<p>Buenas tardes, el último empujón</p>`;
      break;

    case minutosTranscurridos >= 1081 && minutosTranscurridos <= 1320: // Desde las 18:01 hasta las 22:00
      sentenceTimeDiv.innerHTML = `<p>Esto ya son horas extras, ... piensa en parar pronto</p>`;
      break;

    case minutosTranscurridos >= 1321 && minutosTranscurridos <= 1440: // Desde las 22:01 hasta las 00:00
      sentenceTimeDiv.innerHTML = `<p>Buenas noches, es hora de pensar en parar y descansar</p>`;
      break;
  }
};

//Frases:

// Desde las 00:01 hasta las 07:00 Es hora de descansar. Apaga y sigue mañana
// Desde las 07:01 hasta las 12:00 Buenos días, desayuna fuerte y a darle al código
// Desde las 12:01 hasta las 14:00 Echa un rato más pero no olvides comer
// Desde las 14:01 hasta las 16:00 Espero que hayas comido
// Desde las 16:01 hasta las 18:00 Buenas tardes, el último empujón
// Desde las 18:01 hasta las 22:00 Esto ya son horas extras, ... piensa en parar pronto
// Desde las 22:01 hasta las 00:00 Buenas noches, es hora de pensar en parar y descansar
