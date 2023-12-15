const inputPass = document.getElementById("input-pass");
const btnPass = document.getElementById("btn-pass");
const passField = document.getElementById("pass-field");

const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+";

//evalua si el input es menor a 12 || mayor a 50
inputPass.addEventListener("change", (e) => {
  if (Number(e.target.value) < 12 || Number(e.target.value) > 50) {
    alert("La longitud del password debe ser entre 12 y 50 caracteres.");
    btnPass.disabled = true;
  } else {
    btnPass.disabled = false;
  }
});

let resultRandom;

const randomCharacter = (character) => {
  let randomIndex = Math.floor(Math.random() * character.length);
  resultRandom = character.charAt(randomIndex);
};

const randomFunctions = () => {
  let randomNumber = Math.floor(Math.random() * 5);

  switch (randomNumber) {
    case 1:
      randomCharacter(capitalLetters);
      break;

    case 2:
      randomCharacter(lowerCaseLetters);
      break;

    case 3:
      randomCharacter(numbers);
      break;

    case 4:
      randomCharacter(symbols);
      break;
  }
};

//funciona generar pass:

const generatePass = () => {
  let passLength = inputPass.value;
  let randomPass = "";

  for (let i = 0; i < passLength; i++) {
    if (i == 0) {
      randomCharacter(capitalLetters);
      randomPass += resultRandom;
    }
    if (i == 1) {
      randomCharacter(lowerCaseLetters);
      randomPass += resultRandom;
    }
    if (i == 2) {
      randomCharacter(numbers);
      randomPass += resultRandom;
    }
    if (i == 3) {
      randomCharacter(symbols);
      randomPass += resultRandom;
    }

    if (i > 3) {
      randomFunctions();
      randomPass += resultRandom;
    }
  }

  passField.innerHTML = `
  <p>Contraseña generada: ${randomPass}</p>`;
};

btnPass.addEventListener("click", generatePass);

//comprobar el lenght pass del console.log si coincide con el num del input
// let string = "Ix1!jjncypsIH"
// console.log(string.length)
