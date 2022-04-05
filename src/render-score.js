const renderScore = (list) => {
  const scoreContainer = document.querySelector('.score-list');

  scoreContainer.innerHTML = '';
  if (!list.length) {
    scoreContainer.innerHTML = '<li>No scores found</li>';
    return;
  }

  list
    .sort((a, b) => b.score - a.score)
    .forEach((score, index) => {
      const li = document.createElement('li');
      li.innerHTML = `${score.user}: ${score.score}`;
      li.id = index;

      scoreContainer.append(li);
    });
};

export default renderScore;