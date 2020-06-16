var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c  = canvas.getContext("2d");

// c.fillStyle = "lightpink";
// c.fillRect(100, 100, 100, 100);
//             //x, y, width, height
// console.log(canvas);
//c=context

// // line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "blue";
// c.stroke();

//arc / circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false); 
//    // boolean): void;
// c.strokeStyle = "green";
// c.stroke();


          
// for(var i = 0; i <1; i++){
//     var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
// 		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
// 		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
// 		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
// 		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
// 		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
// 		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
// 		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
// 		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
//           '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;

//     var color = colorArray;
//     var randomColor = color[Math.floor(Math.random() * 50)];

//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false); 
//    // boolean): void;
//     c.strokeStyle = randomColor;
//     c.stroke();
// }

//color stuff 

// function getRandomColor() {
// var letters = '0123456789ABCDEF';
// var color = '#';
// for (var i = 0; i < 6; i++) {
// color += letters[Math.floor(Math.random() * 16)];
// }

// return color;
// }

var mouse = {
    x: undefined,
    y: undefined,
}

var maxRadius = 40;	//Max expand size
var minRadius = 2;	//Min expand size

var colorArray = 
[

    "#f32379",
	"#58fee6",
	"#476096",
	"#f8ba03",
	"#ba53c0",
    // "#cc9cdf",
    // "#243870",
    // "#652d87",
    // "#ea428b",
    // "#8d5da4",
];


window.addEventListener("mousemove", 
    function(event){
    mouse.x = event.x
    mouse.y = event.y

});

window.addEventListener("resize", function() {  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() { //1st call draw
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); 
        // c.strokeStyle = getRandomColor();
        // c.stroke();
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function() { //2nd call update
        if (this.x + this.radius > innerWidth || 
            this.x - this.radius < 0) {
            this.dx = -this.dx;
    
            
        }
    
        if (this.y + this.radius > innerHeight || 
            this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //interactivity
        if (mouse.x - this.x <50 && mouse.x -this.x > -50
            && mouse.y - this.y <50 && mouse.y - this.y > -50) {
            if (this.radius  < maxRadius) {
                this.radius += 1;

            }
        } else if (this.radius > this.minRadius){
            this.radius -= 1;
        }

        this.draw();

    }
}


var circleArray = [];


function init() {

    circleArray = [];

    for (var i = 0; i < 450; i++) { //amount of circles
            var radius = Math.random() * 20 + 5; //'random' circle size 1 to 4 (radius)
            var x = Math.random() * (innerWidth - radius * 2) + radius;
            var y = Math.random() * (innerHeight - radius * 2) + radius;
            var dx = (Math.random() - 0.5);    //speed x * 4-5?+
            var dy = (Math.random() - 0.5);   //speed y * 4-8?+
            circleArray.push(new Circle(x, y, dx, dy, radius));
            // var circle = new Circle(200, 200,3 ,3, 30);
            console.log(circleArray);
        }
}



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    // circle.update();

    // c.beginPath();
    // c.arc(x, y, radius, 0, Math.PI * 2, false); 
    // c.strokeStyle = randomColor;
    // c.stroke();

    for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }

   

}
init();
animate(); 
