let skynetChoice;
let userChoice;
let resultat;
let go;
let playAgain;

function skynet(max) {
  return Math.floor(Math.random() * max);
}
skynetChoice = skynet(101);
console.log(skynetChoice);

function getValue() {
  let numberPlayer = document.querySelector("#numberselect").value;
  console.log(numberPlayer);

  return numberPlayer;
}
