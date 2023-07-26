import './style.css';
import { postData, getData } from './modules/get-post.js';
import NewScore from './modules/score-class.js';

const userName = document.getElementById('input__name');
const userScore = document.getElementById('input__score');
const btnRefresh = document.querySelector('.scores__btn-refresh');
const btnSubmit = document.querySelector('.add-score__btn-submit');
const table = document.querySelector('.scores__table');

// Sed the user inputs to the API
const submitNewScore = async () => {
  const list = new NewScore(userName.value, userScore.value);
  await postData(list);
  userName.value = '';
  userScore.value = '';
};
btnSubmit.addEventListener('click', submitNewScore);

// Refres the table of scores with the data of API
btnRefresh.addEventListener('click', (e) => {
  e.preventDefault();
  table.innerHTML = '';
  getData();
});

document.addEventListener('DOMContentLoaded', () => {
  getData();
});