var random = randomCard();
 
function randomCard() {
    var answer = Math.floor(Math.random()* 5)
    console.log(answer);
    return answer;
    
    
}

function option(x) {
    if(x == random) {
        var score = document.getElementById("score").innerHTML;
        score++;
        document.getElementById("score").innerHTML = score;
        document.getElementById("random").src = "zenner/" + x + ".png";
        sleep(1000).then(() => {
        document.getElementById("random").src = "zenner/default.gif";
        });
        random = randomCard();
    } else {
        var score = document.getElementById("score").innerHTML;
        score--;
        document.getElementById("score").innerHTML = score;       
    }
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}