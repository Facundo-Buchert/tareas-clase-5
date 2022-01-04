//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const calculateTotalTime = document.querySelector("#calculate-total-time")
let finalMessagge = document.querySelector("h2")
let hours
let minutes
let seconds

function totalHours() {
    const hour1 = Number(document.querySelector("#hours-1").value)
    const hour2 = Number(document.querySelector("#hours-2").value)
    const hour3 = Number(document.querySelector("#hours-3").value)
    const hour4 = Number(document.querySelector("#hours-4").value)
    const hour5 = Number(document.querySelector("#hours-5").value)
    hours = hour1 + hour2 + hour3 + hour4 + hour5 
}

function totalMinutes() {
    const minute1 = Number(document.querySelector("#minutes-1").value)
    const minute2 = Number(document.querySelector("#minutes-2").value)
    const minute3 = Number(document.querySelector("#minutes-3").value)
    const minute4 = Number(document.querySelector("#minutes-4").value)
    const minute5 = Number(document.querySelector("#minutes-5").value)
    minutes = minute1 + minute2 + minute3 + minute4 + minute5 
}

function totalSeconds() { 
    const second1 = Number(document.querySelector("#seconds-1").value)
    const second2 = Number(document.querySelector("#seconds-2").value)
    const second3 = Number(document.querySelector("#seconds-3").value)
    const second4 = Number(document.querySelector("#seconds-4").value)
    const second5 = Number(document.querySelector("#seconds-5").value)
    seconds = second1 + second2 + second3 + second4 + second5 
}

calculateTotalTime.onclick = function () {
 
    totalSeconds()

    if(seconds >= 60){
        while(seconds >= 60){
            seconds = seconds - 60
            minutes++
        } 
    }

    totalMinutes()
    
    if (minutes >= 60){    
        while(minutes >= 60){
            minutes = minutes - 60
            hours++
        }
    }
    totalHours()



    finalMessagge.textContent = `El tiempo total es de ${hours} horas, ${minutes} minutos y ${seconds} segundos!`

}





