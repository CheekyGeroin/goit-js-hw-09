import Notiflix from 'notiflix';
const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
};

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const amount = refs.amount.value;
  const delay = refs.delay.value;

  for (let i = 1; i <= amount; i += 1) {
    const position = i;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }

  e.target.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const step = refs.step.value;
  const promise = new Promise(() => {
    setTimeout(() => {
      if (shouldResolve) {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, step);
  });
  return promise;
}
