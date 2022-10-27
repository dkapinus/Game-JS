console.log("main.js");

// const MAX = 100;

// const MIN = 0;

// const ATTEMPTS_NUMBER = 10;

// const RANDOM_NUMBER = getRandomNumber();

// const PLAYER_NAME = getPlayerName();

const settings = {
  max: 100,
  min: 0,
  attemptsNumber: 10,
  randomNumber: getRandomNumber(),
  playerName: getPlayerName(),
};

console.log(settings.playerName);
console.log(settings["playerName"]);

function getRandomNumber() {
  const randomNumber = Math.round(Math.random() * 100);
  console.log(randomNumber);
  return randomNumber;
}

function getPlayerName() {
  const playerName = prompt("Как тебя зовут?", " ");
  console.log(playerName);
  return playerName;
}

function superGame(max, min, attemptsNumber, randomNumber, playerName) {
  alert(
    `Привет ${playerName}! Я загадал число от ${min} до ${max}. У тебя ${attemptsNumber} попыток. Удачи!`
  );
  let playerAnswers = [];
  for (let attempt = 1; attempt <= attemptsNumber; attempt++) {
    const playerAnswer = prompt("Какое число я загадал", " ");
    if (playerAnswer > randomNumber) {
      alert(
        `Мое число меньше ! У тебя осталось ${attemptsNumber - attempt} попыток`
      );
      playerAnswers.push(playerAnswer);
    } else if (playerAnswer < randomNumber) {
      alert(
        `Мое число больше ! У тебя осталось ${attemptsNumber - attempt} попыток`
      );
      playerAnswers.push(playerAnswer);
    } else {
      alert(`ВЕРНО!!! Ты разгодал мою тайну за ${attempt} попытки`);
      return;
    }
  }
  alert(
    `Ты не справился за ${attemptsNumber} попыток , я загадал ${randomNumber}, а твои ответы ${playerAnswers}`
  );
}

const { max, min, attemptsNumber, randomNumber, playerName } = settings;
superGame(max, min, attemptsNumber, randomNumber, playerName);
