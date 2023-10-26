const txtNum = document.querySelector("#txtNum");
const btnStart = document.querySelector("#btnStart");
const btnGuess = document.querySelector("#btnGuess");
const txtResult = document.querySelector("#txtResult");

let randomNumber = 0;
const maxRandomNumber = 80;
const minRandomNumber = 20;
const totalShot = 10;

txtNum.setAttribute(
  "placeholder",
  `Type number between ${minRandomNumber} ile ${maxRandomNumber}  `
);
const start = () => {
  randomNumber = getRandomNumber();
  txtNum.removeAttribute("disabled"); //bir elementten bir attribute kaldırmak için kullanılır
  txtNum.focus();
  btnGuess.classList.remove("d-none"); //Guess butonunu etkinleştirmek için
  btnStart.innerHTML = "Reset Game"; // Oyun başladıktan sonra Start butonunu Reset butonuna çeviriyor.
  txtResult.innerHTML = ""; //Label içine yazdığımız yazıyı sıfırlıyor
};

const reset = () => {
  btnGuess.classList.add("d-none");
  txtNum.setAttribute("disabled", "true");
  btnStart.innerHTML = "Start Game";
};

const guess = () => {
  const guessNumber = Number(txtNum.value);
  console.log(guessNumber);
  if (
    !guessNumber ||
    isNaN(guessNumber) ||
    guessNumber > maxRandomNumber ||
    guessNumber < minRandomNumber
  ) {
    txtResult.innerHTML = `Please type a number between ${minRandomNumber}-${maxRandomNumber}`;
    return;
  }
  if (guessNumber === randomNumber) {
    txtResult.innerHTML = "🏆🏆🏆You win!🏆🏆🏆";
    txtResult.classList.replace("text-success", "text-info"); //Bootstrap özelliğini classlist .replace kullanarak değiştirdik
    reset();
  } else if (guessNumber > randomNumber) {
    txtResult.innerHTML = `${guessNumber}  is too hight lower the number 👎`;
  } else {
    txtResult.innerHTML = `${guessNumber}  Is to low, Raise the number 👍`;
  }
  txtNum.focus();
  txtNum.value = "";
};

const getRandomNumber = () => {
  return (
    Math.floor(Math.random() * (maxRandomNumber - minRandomNumber + 1)) +
    minRandomNumber
  );
  /*
  Math.floor(Math.random()*(max-min +1))+min;

  örn:
  60 ile 5 arasında (5 ve  60 dahil) sayı tutmak istiyorsak
Math.floor(Math.random()*(60-5+1))+5;
Math.floor(Math.random()*56)+5;
  */
};
