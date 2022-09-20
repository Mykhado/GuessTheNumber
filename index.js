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
let result = document.getElementById("resultat");
let numberPlayer1 = document.getElementById("selectionNumber1");
let numberPlayer2 = document.getElementById("selectionNumber2");
let numberPlayer3 = document.getElementById("selectionNumber3");
let btnSn = document.getElementById("btnUser");
let resetBtn = document.getElementById("btnReset");

  
btnSn.addEventListener("click",()=>{
  userChoice=Number(numberPlayer1.value*100)+Number(numberPlayer2.value*10)+Number(numberPlayer3.value);
  console.log(userChoice);
  
  if(userChoice<0 ||userChoice> 100|| isNaN(userChoice)){
  alert(" Attention choisi bien un chiffre entre 0 et 100 !")
  }
  if(userChoice<skynetChoice){
    result.innerHTML= "<p> C'est plus !</p>"
  }else if( userChoice>skynetChoice){
    result.innerHTML="<p> C'est moins !</p>"
  }else if (userChoice= skynetChoice){
    result.innerHTML="<p> Bravo tu as trouvé, tu as gagné ma reconnaissance eternel !</p>"
  }
});

resetBtn.addEventListener("click",()=>{
  location.reload();
});




