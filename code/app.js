console.log('linked');

var blue_square = document.getElementById('blue_square');
var blue_position = 0;
var red_square = document.getElementById('red_square');
var red_position = 0;
var gameOver = false;

function checkKeyPressed(e){
	if(e.keyCode == "65" && !gameOver){
		if(blue_position < 100){
			blue_position += 5;
			blue_square.style.left = blue_position + "%";
			checkWin();
		}
	}
	if(e.keyCode == "76" && !gameOver){
		if(red_position < 100){
			red_position += 5;
			red_square.style.left = red_position + "%";
			checkWin();
		}
	}
}

function createGame(){
	document.addEventListener('keydown',checkKeyPressed,false);
}

function checkWin(){
	if(blue_position == 100){
		alert("Usain Bolt wins the race!");
		gameOver = true;
	}
	if(red_position == 100){
		alert("Old man wins the race!");
		gameOver = true;
	}
}


createGame();