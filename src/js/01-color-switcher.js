const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onSwitchColor);

function onSwitchColor() {
  refs.startBtn.disabled = true;
  const colorTimeout = setTimeout(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
    onSwitchColor();
  }, 1000);
  refs.stopBtn.addEventListener('click', onRemoveSwitchColor);

  function onRemoveSwitchColor() {
    refs.startBtn.disabled = false;
    clearTimeout(colorTimeout);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
