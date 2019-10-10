import 'bootstrap';
import '../styles/main.scss';

const clickBtn = () => {
  console.log('hi.');
};

const init = () => {
  document.getElementById('btn').addEventListener('click', clickBtn);
};

init();
