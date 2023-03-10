console.log("welcome to tic tac toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

//Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}

//Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 8, 5, 0],
        [3, 4, 5, 8, 17, 0],
        [6, 7, 8, 8, 29, 0],
        [0, 3, 6, -5, 17, 90],
        [1, 4, 7, 8, 17, 90],
        [2, 5, 8, 20, 17, 90],
        [0, 4, 8, 7.5, 17.7, 45],
        [2, 4, 6, 8, 18, 135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText +" won ";
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
      })

}

//Game logic
let boxes = document.getElementsByClassName("box");
let array = Array.from(boxes);
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
           if(!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
           }
        }
    })
})
 
//Add on click listener to reset button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""

    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerHTML  = "Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})