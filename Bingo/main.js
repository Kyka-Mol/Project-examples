var pause = false;

document.getElementById("neko").style.opacity = 0;

function randomNumber() { //Generates random num
    var num = Math.floor(Math.random() * 99) + 1;
    return num;
}

var array = []; //Array for bingo list
for (i = 0; i < 18; i++) { //Loop to get 18 random num
   var random = randomNumber();
   if (array.indexOf(random) > -1) { // Checks index of array (random), if the number is not in the array JS gives it -1.
       i = i - 1;                    // If the number is in the array it will always be higher than -1. 
       continue;                     // Then it repeats loop until new number.
   }

   array.push(random);
}

array.sort((a, b) => a - b); // Sort array ASC

for(i = 0; i < array.length; i++) {
    if (i == 2 || i == 7 || i == 15) { // Blacked out box '3, 8, 16'
        $('#container').append('<div class="bbox" style="background-color: black;" id="'+ array[i] +'">'+array[i]+'</div>');
    } else {
        $('#container').append('<div class="box" id="'+ array[i] +'">'+array[i]+'</div>'); //Normal box
    }
}

console.log(array);
$(".box").on('click', function(){
    if (numArray.indexOf(parseInt(this.id)) == -1) return //Checks if number has appeared, if not it returns (cancel click)
    console.log(this.id);
    $('#' + this.id).prepend('<img id="img" src="mark.png" />') // If the number has appeared, the click gives a checkmark
    checkedNum.push(parseInt(this.id));
})

var numArray = [];
var count = numClick();

function numClick() {
    var num = randomNumber();

    if (numArray.indexOf(num) > -1) { //Checks for duplicate
        numClick();                   //Restart function if dupe
    } else {
        document.getElementById("num").textContent = num;   //If not dupe, new number
        numArray.push(num);
    }

    console.log(numArray);
}

var sortedNum = array;
var checkedNum = [];

console.log(checkedNum);
console.log(sortedNum);

function checkBingo() {                     //Checks if bingo is valid
    var firstRow = sortedNum.slice(0, 6);
    var secondRow = sortedNum.slice(6, 12);
    var thirdRow = sortedNum.slice(12, 18);

    var bingo = false;

    var checkedInFirstRow = 0;
    for (var i = 0; i < firstRow.length; i++) {
        if (checkedNum.includes(firstRow[i]) || i == 2) {
            checkedInFirstRow++;
        }
    }

    if (checkedInFirstRow == 6) {
        bingo = true;
    }

    var checkedInSecondRow = 0;
    for (var i = 0; i < secondRow.length; i++) {
        if (checkedNum.includes(secondRow[i]) || i == 1) {
            checkedInSecondRow++;
        }
    }

    if (checkedInSecondRow == 6) {
        bingo = true;
    }

    var checkedInThirdRow = 0;
    for (var i = 0; i < thirdRow.length; i++) {
        if (checkedNum.includes(thirdRow[i]) || i == 3) {
            checkedInThirdRow++;
        }
    }

    if (checkedInThirdRow == 6) {
        bingo = true;
    }

    if (bingo) {
        bingoCelebration();
    } else {
        window.alert("invalid bingo");
    }
}


function bingoCelebration() {
    document.getElementById("neko").style.opacity = 100;
    alert("Bingo!")
    pause = true;
}

setInterval(function() {
    if (pause) return;
    numClick();
}, 1000);
