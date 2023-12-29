import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const btnStart = document.querySelector('[data-start]');
const timerInput = document.querySelector('#datetime-picker');


const day = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

btnStart.addEventListener('click', onClick);

// let userSelectedDate = null;
let userSelectedDate

// бібліотека flatpickr( вибір дати)
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedData = selectedDates[0];
    const initialTimer = selectedData.getTime() - new Date().getTime();
    convertMs(initialTimer);

      if (selectedData < new Date()) {
        //використання бібліотеки iziToast(виводить повідомнення)
      iziToast.error({
        position: 'topRight',
          message: 'Please choose a date in the future',
           backgroundColor: 'red',
      });
      btnStart.setAttribute('disabled', true);
    }
    else {
      btnStart.removeAttribute('disabled');
      userSelectedDate = selectedData;
    }
  },
};
flatpickr(timerInput, options);


// кнопка start
function onClick(){
    const selectedTime = userSelectedDate.getTime();
  timerInput.setAttribute('disabled', true);
    btnStart.setAttribute('disabled', true);

  const timerInterval = setInterval(() => {
    let remainingTime = selectedTime - Date.now();
    const numberOfTimer = convertMs(remainingTime);
    if (remainingTime <= 0) {
      iziToast.info({
        position: 'topRight',
          message: 'Time is up',
          backgroundColor:'green'
      });
        // clearInterval() Скасування інтервалу
      clearInterval(timerInterval);
    } else {
      day.textContent = `${numberOfTimer.days}`;
      hours.textContent = `${numberOfTimer.hours}`;
      minutes.textContent = `${numberOfTimer.minutes}`;
      seconds.textContent = `${numberOfTimer.seconds}`;
    }
  }, 1000);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day)
    .toString()
    .padStart(2, '0');
  // Remaining hours
  const hours = Math.floor((ms % day) / hour)
    .toString()
    .padStart(2, '0');
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute)
    .toString()
    .padStart(2, '0');
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second)
    .toString()
    .padStart(2, '0');

  return { days, hours, minutes, seconds };
}
timerInput.value = '';



