let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let dice3 = document.getElementById("dice3");
let dice4 = document.getElementById("dice4");

let diceValue1 = 1;
let diceValue2 = 1;
let diceValue3 = 1;
let diceValue4 = 1;

let playerCurrent = document.getElementById("playerCurrent");
let casinoCurrent = document.getElementById("casinoCurrent");

let pT = 0;
let cT = 0;
let pC = 0;
let cC = 0;

let playerTotal = document.getElementById("playerTotal");
let casiniTotal = document.getElementById("casiniTotal");

const startRoll = document.getElementById("btn-roll");
const newGame = document.getElementById("btn-new");
const popUp = document.getElementById("pop-up");
const winner = document.getElementById("winner");

const maxNumberOfRolls = 3;
let numberOfRolls = 0; 
let popupAnimationHandler;
let opacityValue = 0;
let win = "";

// new game button clicked. reset everything to default.
newGame.addEventListener("click", function(){
    numberOfRolls = 0; 
    pT = 0;
    cT = 0;
    pC = 0;
    cC = 0;
    playerCurrent.innerHTML = 0;
    casinoCurrent.innerHTML = 0; 
    playerTotal.innerHTML = 0;
    casiniTotal.innerHTML = 0;
    dice1.src = ``;
    dice2.src = ``;
    dice3.src = ``;
    dice4.src = ``;
    popUp.style.opacity = 0;
    opacityValue = 0;      
});

//roll button is clicked
startRoll.addEventListener("click", function(){
    
    if (numberOfRolls<maxNumberOfRolls)
    {
        numberOfRolls++;       
        
        anotherRoll();    
       
        if (diceValue1 == 1 || diceValue2 == 1)
        {
            pC = 0;
        } else if (diceValue1 == diceValue2)
                {
                     pC = (diceValue1+diceValue2)*2;
                } else
                    {
                        pC = diceValue1+diceValue2;
                    };      
        
        if (diceValue3 == 1 || diceValue4 == 1)
            {
                cC = 0;
            } else if (diceValue3 == diceValue4)
                {
                    cC = (diceValue3+diceValue4)*2;
                    } else 
                        {
                            cC = diceValue3+diceValue4;
                        };

        playerCurrent.innerHTML = pC;
        casinoCurrent.innerHTML = cC; 

        pT =  pT + pC;
        playerTotal.innerHTML = pT;

        cT = cT + cC;
        casiniTotal.innerHTML = cT;
    }; 
    
    if (numberOfRolls == maxNumberOfRolls)
    {
        if (pT>cT)
        {
            winner.innerHTML = "Congratulations, You won!"; 
        } else
            {
                winner.innerHTML = "Sorry, You lost!";                 
            };
        popupAnimationHandler = requestAnimationFrame( fadeIn );
    };
});

// fade in Win message
function fadeIn(){

    opacityValue = opacityValue + .025;

    if(opacityValue <= 1){
        popUp.style.opacity = opacityValue;
        requestAnimationFrame( fadeIn );
    } else
        {
            popUp.style.opacity = 1;
        }    
}

// generates random dices
function anotherRoll()
{
    diceValue1 = randomNumber();
    dice1.src = `images/dice-${diceValue1}.png`;
    diceValue2 =randomNumber();
    dice2.src = `images/dice-${diceValue2}.png`;
    diceValue3 = randomNumber();
    dice3.src = `images/dice-${diceValue3}.png`;
    diceValue4 = randomNumber();
    dice4.src = `images/dice-${diceValue4}.png`; 
}

function randomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }