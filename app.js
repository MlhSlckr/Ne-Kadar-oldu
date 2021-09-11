const gün = document.querySelector('.gün')
const saat = document.querySelector('.saat')
const dakika = document.querySelector('.dakika')
const saniye = document.querySelector('.saniye')
const date = document.querySelector('.date')
const button = document.querySelector('.button')


button.addEventListener('click', () => {
  const tarih = date.value;
  function countdown() {
    const tarihDate = new Date(tarih)
    const currentDate = new Date()

    const totalSeconds = (tarihDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    gün.textContent = formatTimer(days);
    saat.textContent = formatTimer(hours);
    dakika.textContent = formatTimer(mins);
    saniye.textContent = formatTimer(seconds);
    localStorage.setItem('dateValue', date.value)
  }

  function formatTimer(time) {
    return time < 10 ? `0${time}` : time;
  }

  countdown()

  setInterval(countdown, 1000)
})

if (localStorage.dateValue) {
  tarih = localStorage.dateValue
  date.value = tarih
  function countdown() {
    const tarih = date.value;
    const tarihDate = new Date(tarih);
    const currentDate = new Date();

    const totalSeconds = (tarihDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    gün.textContent = formatTime(days);
    saat.textContent = formatTime(hours);
    dakika.textContent = formatTime(mins);
    saniye.textContent = formatTime(seconds);
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  countdown();

  setInterval(countdown, 1000)
}