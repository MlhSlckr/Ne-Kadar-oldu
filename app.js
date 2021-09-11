const gün = document.querySelector('.gün')
const saat = document.querySelector('.saat')
const dakika = document.querySelector('.dakika')
const saniye = document.querySelector('.saniye')
const date = document.querySelector('.date')
const button = document.querySelector('.button')

button.addEventListener('click', () => {
  function countdown() {
    const secim = date.value;
    const secimDate = new Date(secim);
    const currentDate = new Date();

    const totalSeconds = (secimDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    gün.textContent = days * -1;
    saat.textContent = hours * -1;
    dakika.textContent = mins * -1;
    saniye.textContent = seconds * -1;

  }
  countdown();
  setInterval(countdown, 1000);
})


