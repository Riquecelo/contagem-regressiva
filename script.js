const segundo = document.querySelector('#seg');
const minuto = document.querySelector('#min');
const horas = document.querySelector('#horas');
const dias = document.querySelector('#dias')

const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

const updateCountdown = () =>{
    const currentTime = new Date();
    const difference = newYearTime - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;
    
    segundo.textContent = seconds < 10 ? '0' + seconds : seconds;
    minuto.textContent = minutes < 10 ? '0' + minutes : minutes;
    horas.textContent = hours < 10 ? '0' + hours : hours;
    dias.textContent = days < 10 ? '0' + days : days;
}

setInterval(() => {
    updateCountdown()
}, 1000)