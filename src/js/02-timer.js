import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  timePicker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
};

const currentDate = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: currentDate,
  minuteIncrement: 1,
  onClose,
};

const calendar = flatpickr('#datetime-picker', options);
refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', onClose);
function onClose(selectedDates) {
  if (currentDate > selectedDates[0]) {
    Notiflix.Notify.warning('Please choose a date in the future');
  }
  if (currentDate < selectedDates[0]) {
    refs.startBtn.disabled = false;
    const ms = selectedDates[0] - currentDate;
    setInterval(convertMs(ms), 1000);
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  const daysEl = document.querySelector('span[data-days]');
  const hoursEl = document.querySelector('span[data-hours]');
  const minutesEl = document.querySelector('span[data-minutes]');
  const secondEl = document.querySelector('span[data-seconds]');
  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondEl.textContent = seconds;
  return { days, hours, minutes, seconds };
}
