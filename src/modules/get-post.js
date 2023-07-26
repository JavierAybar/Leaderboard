const postData = async (obj) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/sTasHn5qwf0v98RIRjlV/scores/', {
    method: 'POST',
    body: JSON.stringify({
      name: "Javier's game",
      user: obj.name,
      score: obj.score,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const afterResponse = await response.json();
  return afterResponse;
};

const getData = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/sTasHn5qwf0v98RIRjlV/scores/');
  const data = await response.json();

  data.result.sort((a, b) => b.score - a.score);

  const table = document.querySelector('.scores__table');

  data.result.forEach((data) => {
    table.innerHTML += `<li class="scores__item">${data.user} : ${data.score}</li>`;
  });
};

export { postData, getData };