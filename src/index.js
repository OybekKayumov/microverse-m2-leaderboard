import './style.css';

import { getScores, setScore } from './scores';
import renderScore from './render-score';

const refBtn = document.querySelector('.btn-refresh');
const form = document.querySelector('form');

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
});
