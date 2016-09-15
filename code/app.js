console.log('linked');

var gameOver = false;
var blue_square;
var red_square;

function Square(color) {
	this.color = color;
	this.id = color +"_square";
	this.elementInDOM = document.getElementById(this.id);
	this.position = 0;
}

Square.prototype.checkWin = function(){
	if(this.position === 100){
		alert(this.color + " has won the race!");
		gameOver = true;
	}
}

Square.prototype.moveSquare = function(){
	if(this.position < 100){
		this.position += 5;
		this.elementInDOM.style.left = this.position + "%";
		this.checkWin();
	}
}

function checkKeyPressed(e){
	if(e.keyCode == "65" && !gameOver){
		blue_square.moveSquare();
	}
	if(e.keyCode == "76" && !gameOver){
		red_square.moveSquare();
	}
}

function createGame(){
	blue_square = new Square('blue');
	red_square = new Square('red');
	document.addEventListener('keydown',checkKeyPressed,false);
}

createGame();
