const numElVise = document.querySelector("#numVise");
const numElFinal = document.querySelector("#numFinal");
const count = document.querySelector("#count");
const result = document.querySelector("#result");

count.addEventListener("click", () => {
  const num1 = numElVise.value * 0.4;
  const num2 = numElFinal.value * 0.6;
  console.log(num1, num2);
  if (!isNumValid(num1) || !isNumValid(num2)) {
    alert("Please enter a valid number");
    return;
  }
  const avarege = getAverage(num1, num2);
  const letter = converNumToLetter(avarege);
  avarege;
  result.innerHTML = `Avarege is ${avarege.toFixed(0)} Harf Notunuz: ${letter}`;
});

const isNumValid = (num) => {
  return num && !isNaN(num) && num <= 100 && num >= 0;
};
const getAverage = (num1, num2) => {
  return Number(num1) + Number(num2);
};

const converNumToLetter = (num) => {
  let letter = "";
  if (num >= 90 && num <= 100) letter = "A";
  else if (num >= 80 && num < 90) letter = "B";
  else if (num >= 70 && num < 80) letter = "C";
  else if (num >= 50 && num < 70) letter = "D";
  else if (num >= 0 && num < 50) letter = "F";
  return letter;
};
