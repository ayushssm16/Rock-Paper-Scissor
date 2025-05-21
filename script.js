let userscore =0;
let comscore =0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options =["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was Draw.");
    msg.innerText = "Game Draw! Please, Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, CompChoice) =>{
    if(userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("You Win");
        msg.innerText =`You Win! your ${userChoice} beats ${CompChoice}` ;
        msg.style.backgroundColor = "green";
    }else{
        console.log("You Lose");
        comscore++;
        compscorepara.innerText = comscore;
        msg.innerText = `You lose! ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userChoice) =>{
    console.log("user choice =", userChoice);
    const CompChoice= genCompChoice();
    console.log("comp choice =", CompChoice);

    if(userChoice === CompChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = CompChoice === "paper" ? false : true;

        }else if(userChoice === "paper"){
            userWin = CompChoice === "scissors" ? false : true;
        }else{
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, CompChoice);
    }
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=> {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playgame(userChoice);
    });
});