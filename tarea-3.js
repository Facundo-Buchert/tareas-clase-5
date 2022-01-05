//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $calculateTotalTime = document.querySelector("#calculate-total-time")
const $totalTimeText = document.querySelector("strong")

$calculateTotalTime.onclick = function(){
    const hours = document.querySelectorAll(".hours")
    const minutes = document.querySelectorAll(".minutes")
    const seconds = document.querySelectorAll (".seconds")
    let totalHours = calculateTime(hours)
    let totalMinutes = calculateTime(minutes)
    let totalSeconds = calculateTime(seconds)

    function calculateTime(time) {
    let finalTime = 0;
    for (let i = 0; i < time.length; i++) {
      finalTime += Number(time[i].value);
    }
    return finalTime;
  }

    if(totalSeconds >= 60){
        while(totalSeconds >= 60){
            totalSeconds = totalSeconds - 60
            totalMinutes++
        }
    }

    if(totalMinutes >= 60){
        while(totalMinutes >= 60){
            totalMinutes = totalMinutes - 60
            totalHours++
        }
    }

    const finalMessagge = document.querySelector("h2")
    finalMessagge.textContent = `El tiempo total es de ${totalHours} horas, ${totalMinutes} minutos y ${totalSeconds} segundos!`

}





