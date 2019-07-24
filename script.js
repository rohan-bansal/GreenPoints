
var buttonElem = document.querySelector('#finishButton');
var challengeOne = document.getElementById('challengeOne');
var challengeTwo = document.getElementById('challengeTwo');
var challengeThree = document.getElementById('challengeThree');
var challenges = document.getElementsByClassName('challenges');
let greenPoints = 0;

 buttonElem.addEventListener("click", () => {
  greenPoints++;

});


function buttonStrike() {
  

  /*
  event listener--
  and getelementbyid--
  give the h1 an id--
  in the js getelementbyid and assign it to a variable--
  then use .innerHTML
  to change it if the event is triggered
  "click" event
*/
}

function move() {
    var id = document.getElementById("challengeprogress");
    var d = new Date();
    var second = d.getSeconds();
    var width = second * 4;
    id.style.width = width + "px";
    var interval = setInterval(change, 1000)
    function change(){
        if (width >= 240){
            clearInterval(interval);
            move();
            generateChallenge();
        } 
            width += 4 ;
            id.style.width = width + "px";
    }
  }

function generateChallenge() {

  var myArray = [
    "Challenge 1",
    "Challenge 2",
    "Challenge 3",
    "Challenge 4",
    "Challenge 5",
    "Challenge 6",
    "Challenge 7",
    "Challenge 8",
    "Challenge 9",
    "Challenge 10",
    "Challenge 11",
    "Challenge 12",
    "Challenge 13",
    "Challenge 14",
    "Challenge 15",
    "Challenge 16",
    "Challenge 17",
    "Challenge 18",
    "Challenge 19",
    "Challenge 20",
  ]; 

  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  var randomItem2 = myArray[Math.floor(Math.random()*myArray.length)];
  var randomItem3 = myArray[Math.floor(Math.random()*myArray.length)];
  var randomItem4 = myArray[Math.floor(Math.random()*myArray.length)];
  var randomItem5 = myArray[Math.floor(Math.random()*myArray.length)];
  document.getElementById("challenge1").innerHTML = randomItem;
  document.getElementById("challenge2").innerHTML = randomItem2;
  document.getElementById("challenge3").innerHTML = randomItem3;
  document.getElementById("challenge4").innerHTML = randomItem4;
  document.getElementById("challenge5").innerHTML = randomItem5;
  
}