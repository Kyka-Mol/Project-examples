var random = randomCard();
function randomCard() {
    var answer = Math.random(Math.floor() * 5);
    return answer;
}
function option() {
    if (x == answer) {
        var score = document.getElementById("score").innerHTML;
        score++;
        document.getElementById("score").innerHTML = score;
        document.getElementById("random").src = "zenner/" + x + ".png";
        //sleep
        //gif
        random = randomCard();
    }
    else {
        var score = document.getElementById("score").innerHTML;
        score--;
        document.getElementById("score").innerHTML = score;
    }
}
