let SCORE = 0;
const pickUserHand = (hand) =>{
    console.log(hand);
    //Hiding the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    //showing the next page
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
    // setting the user pick
    if(hand == "rock"){
    document.getElementById("userPickImage").src = "images/Rock.png";
    }
    if(hand == "paper"){
        document.getElementById("userPickImage").src = "images/Paper.png";
    }
    if(hand == "scissors"){
        document.getElementById("userPickImage").src = "images/Scissors.png";
    }
    let cpHand = pickComputerHand();
    console.log(cpHand);
    referee(hand,cpHand);
    
};
const pickComputerHand =() =>{
            let hands = ["rock","paper","scissors"]
            let pic = Math.floor(Math.random() * 3);
            console.log(pic);
            let cpHand = hands[pic];
            //set computer pick image
            if(cpHand == "rock"){
                document.getElementById("computerPickImage").src = "images/Rock.png";
            }
            if(cpHand == "paper"){
                document.getElementById("computerPickImage").src = "images/Paper.png";
            }
            if(cpHand == "scissors"){
            document.getElementById("computerPickImage").src = "images/Scissors.png";
            }
            return cpHand
    };
const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "paper" && cpHand == "rock") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
    if (userHand == "paper" && cpHand == "paper") {
      setDecision("It's a tie!");
    }
    if (userHand == "rock" && cpHand == "scissors") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
    if (userHand == "rock" && cpHand == "paper") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "rock" && cpHand == "rock") {
      setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "scissors") {
      setDecision("It's a tie!");
    }
    if (userHand == "scissors" && cpHand == "rock") {
      setDecision("YOU LOSE!");
    }
    if (userHand == "scissors" && cpHand == "paper") {
      setDecision("YOU WIN!");
      setScore(SCORE + 1);
    }
  };
const setDecision = (decision) =>{
    console.log(decision)
    document.querySelector(".decision h1").innerText = decision;


}
const setScore = (score) =>{
    SCORE = score;
    console.log(score)
    document.querySelector(".score h1").innerText= score;
}
const PlayAgain = () =>{
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
    //showing the next page
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

}
const rules = () =>{
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    let contest = document.querySelector(".fimg");
    contest.style.display = "flex";

}