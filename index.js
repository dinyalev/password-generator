const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

const allArrays = [letters, numbers, symbols];

function generate(length) {
  let result = "";

  for (let i = 0; i < length; i++) {
    const arrayToPick = allArrays[randomNumber(0, allArrays.length - 1)];
    result += arrayToPick[randomNumber(0, arrayToPick.length - 1)];

    //if string
    if (arrayToPick === allArrays[0]) {
      // try to uppercase the letter
      if (randomNumber(0, 1) === 1) {
        result =
          result.substring(0, result.length - 1) +
          result[result.length - 1].toUpperCase();
      }
    }
  }

  return result;
}

function randomNumber(from, to) {
  const rand = from + Math.random() * (to + 1 - from);
  return Math.floor(rand);
}

function getPassword({ length, times }) {
  console.log("\nstarting...\n");
  function runQue(que) {
    if (que[0]) {
      console.log("  " + que[0](length));
      que.shift();
    }
  }

  const passwordQue = [];

  for (let i = 0; i < times; i++) {
    passwordQue.push(generate);
  }

  const intervalTimer = setInterval(() => {
    if (!passwordQue.length) {
      clearInterval(intervalTimer);
      setTimeout(() => {
        console.log("\n done ;) ");
      }, 1000);
    }
    runQue(passwordQue);
  }, 350);
}

getPassword({ length: 16, times: 24 });
