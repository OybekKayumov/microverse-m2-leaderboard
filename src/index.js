import './style.css';

import { getScores, setScore } from './scores';
import renderScore from './render-score';

const refBtn = document.querySelector('.btn-refresh');
const form = document.querySelector('form');
const msg = document.querySelector('#msg');

refBtn.addEventListener('click', async () => {
  const list = await getScores();
  renderScore(list);
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const score = {
    user: form.elements.username.value,
    score: form.elements.score.value,
  };

  form.reset();
  await setScore(score);

  setTimeout(() => {
    // msg.innerHTML = 'Your score has been added, press Refresh to see';
    msg.innerHTML = `"${score.score}" by "${score.user}" has been added, press Refresh to see`;
    setTimeout(() => {
      msg.innerHTML = '';
    }, 2000);
  }, 2000);
});
