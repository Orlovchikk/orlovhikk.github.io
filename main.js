const numberSpan = document.querySelector('.task__number'),
  startWindows = document.querySelector('.start'),
  startBtn = document.querySelector('.startBtn'),
  answerBtn = document.querySelector('.submit-answer'),
  taskWindow = document.querySelector('.task__inner'),
  answerInput = document.querySelector('.answer__input'),
  cats = [
    'https://forgifs.com/gallery/d/310576-2/Otter-kitten-sink-bath.gif',
    'https://forgifs.com/gallery/d/303115-2/Kitten-chasing-ping-pong-ball.gif',
    'https://forgifs.com/gallery/d/380368-3/Troll-cat.gif',
    'https://forgifs.com/gallery/d/319667-2/Cat-hind-legs-dance_001.gif',
    'https://forgifs.com/gallery/d/306806-2/Cat-box-traps.gif'
  ]


let number,
  answer,
  justRandomNumber;


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
  numberSpan.innerHTML = `Вычислите: √${number}`;
}

function check() {
  if (answerInput.value == answer) {
    justRandomNumber = parseInt(Math.random() * 5);
    numberSpan.innerHTML = `<img src="${cats[justRandomNumber]}">`;
    setTimeout(function () {
      answerInput.value = '';
      task();
    }, 5000);
  }
  else {
    alert('Попробуй еще раз');
    answerInput.value = '';
  }
}

answerInput.value = '';
answerInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    check();
  }
});
startBtn.addEventListener('click', start);
answerBtn.addEventListener('click', check);
answerInput.value = '';
answerInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      check();
    }
});
startBtn.addEventListener('click', start);
answerBtn.addEventListener('click', check);
