function time(){
    setInterval(function(){
    let timeInHours  =  document.getElementById("hours")
    let timeInMinutes =   document.getElementById("minutes")
    let timeInSeconds =  document.getElementById("seconds")
    let amPm =  document.getElementById("amPm")

let seconds = new Date().getSeconds();
let minutes = new Date().getMinutes();
let hours = new Date().getHours();

    timeInHours.innerHTML   = new Date().getHours()+"  :"
    timeInMinutes.innerHTML = new Date().getMinutes()+"  :"
    timeInSeconds.innerHTML = new Date().getSeconds()
    amPm.innerHTML = "Pm"


if(seconds<10){
    timeInSeconds.innerHTML = `0${seconds}`
}if(minutes<10){
    timeInMinutes.innerHTML = `0${minutes}  :`
}if(hours<10){
    timeInHours.innerHTML = `0${hours}  :`
}if (hours<12){
    amPm.innerHTML = "Am"
}if(hours>12){
    timeInHours.innerHTML = `0${hours - 12}  :`
}if(hours === 0){
    timeInHours.innerHTML = `${12}  :`
}
}),1000}

time();
