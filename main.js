const numberSpan = document.querySelector('.task__number'),
  startWindows = document.querySelector('.start'),
  startBtn = document.querySelector('.startBtn'),
  answerBtn = document.querySelector('.submit-answer'),
  taskWindow = document.querySelector('.task__inner'),
  answerInput = document.querySelector('.answer__input');


let number,
  answer


function start() {
  startWindows.classList.remove('enable');
  startWindows.classList.add('disable');
  taskWindow.classList.remove('disable');
  taskWindow.classList.add('enable');
  task();
}

function task() {
  number = (parseInt(Math.random() * 50)) ** 2;
  answer = Math.sqrt(number);
  numberSpan.innerHTML = `${number}`;
}

function check() {
  if (answerInput.value == answer) {
    answerInput.value = '';
    task();
  }
  else {
    alert('Попробуй еще раз');
  }
}

answerInput.value = '';
answerInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      check();
    }
});
startBtn.addEventListener('click', start);
answerBtn.addEventListener('click', check);
