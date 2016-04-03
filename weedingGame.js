function startGame() {
	myScore = new component("12px", "Consolas", "black", 280, 40, "text");
}
// function component(width, height, color, x, y, type) {
//     this.type = type;
//     this.score = 0;
//     this.width = width;
//     this.height = height;   
//     this.x = x;
//     this.y = y;
// }

var score = 0;

function weed1_onclick(){
	document.getElementById("weed1").style.display="none";
	score++;
	document.getElementById("score").textContent=score;
}
function weed2_onclick(){
	document.getElementById("weed2").style.display="none";
	score++;
	document.getElementById("score").textContent=score;
}
function weed3_onclick(){
	document.getElementById("weed3").style.display="none";
	score++;
	document.getElementById("score").textContent=score;
}
function weed4_onclick(){
	document.getElementById("weed4").style.display="none";
	score++;
	document.getElementById("score").textContent=score;
}

function weed5_onclick(){
	document.getElementById("weed5").style.display="none";
	score++;
	document.getElementById("score").textContent=score;
}
