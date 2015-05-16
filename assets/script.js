totalClick = 0;
var touched = [];
var touchedSquares = [];
var score = 0;

// ---- randomizer
var board = {
	"0":0,
	"1":0,
	"2":0,
	"3":0,
	"4":0,
	"5":0,
	"6":0,
	"7":0
}
var order = []

var pictures = ["assets/image1.png","assets/image2.jpg","assets/image3.png",
				"assets/image4.png","assets/image5.jpg","assets/image6.png",
				"assets/image7.png","assets/image8.png"]


// randomly pick letters 8, 2 of each kind.

// randomly pick a number between 1 and 8 
for (q = 0 ; order.length < 16 ; q++) {
	random = Math.floor(Math.random()*8)
//	console.log (board[random], "board[random]")

// if board[random] < 2 ---  push random to order, increment board
	if (board[random] < 2) {
		order.push(random)
		board[random] +=1
	}
}
// ---- /randomize

var setBackground = function(index) {  

	console.log("I'm sending back the picture at order[", order[index], "]" )
	var tempHolder =  "url('" + pictures[order[index]] + "')"
	touched.push (order[index])
	console.log (touched)
	return tempHolder
	
} // end setBackground

var flipOver = function() {
		setTimeout(function() {
		//console.log(touchedSquares[touchedSquares.length - 1], "touchedSquares[touchedSquares.length - 1]")
		return	(document.getElementById(touchedSquares[touchedSquares.length - 1]).style.backgroundImage = "none",
				document.getElementById(touchedSquares[touchedSquares.length - 2]).style.backgroundImage = "none")
		},1000)

} // end flipOver	



// each image in order will be assigned to each of the 16 squares


//var image1 = document.createElement("IMG")
//image1.setAttribute("src","assets/image3.png")
//document.body.appendChild(image1)
//document.getElementById("yo").appendChild(image1)
last = "black"

// if the square touched has the same background color as the square touched
// before, console.log(1)



for (i = 0 ; i < 16 ; i++) { // create the 16 squares
	var square = document.createElement('div')
	square.setAttribute("id", i);
	square.style.width = "170px"
	square.style.float = "left"
	square.style.paddingBottom = "170px"
	square.style.backgroundRepeat="no-repeat"

	// set background image
//	if (i === 1) {
	//	square.style.backgroundImage=setBackground(i)

//	} else {
	 	square.style.backgroundColor = "green"
	// } 	// /set background mage

	square.style.border = "1px solid white"
	document.querySelector(".centerMe").appendChild(square)

// when I click a square, the image in order at that square's ID appears	
	square.addEventListener("click", function() {
		console.log(this.getAttribute("id"));
		touchedSquares.push(parseInt(this.getAttribute("id")))
		console.log (touchedSquares, "touchedSquares")
		var thisId = this.getAttribute("id");  //store pics id to variable
		//console.log(typeof(thisId))

// function removes image from last 2 items in the order array
	
		var scoreCount = function() {
			 score += 100
			// var temp = document.createElement("h2")
			// temp.className = "scoreCounter";
			// temp.appendChild("score")

			var willReturn = "Score \"" + score + "\""
			console.log(willReturn)
		//	return willReturn
			return willReturn
		}
// shows picture if totalClick <= 2
		if (totalClick < 2) {
		this.style.backgroundImage = setBackground(thisId) 
		totalClick += 1
		//this.style.backgroundImage = "url('assets/image1.png')"
		}
		if (totalClick === 2) {
			if (touched[touched.length - 1] !== touched[touched.length - 2]) {
				console.log ("first", touched[touched.length - 1], "second",touched[touched.length - 2] )
				console.log("nope")

				flipOver() // flips last 2 items
				totalClick = 0 // resets total click 

			} else {
				
			//	document.querySelector(".centerMe").appendChild(square)
			//	score();
				document.querySelector(".scoreCounter").innerHTML = scoreCount()
				//var tempInfo = document.getElementById("#scoreCount").innerHTML
				//console.log (tempInfo, "#tempInfo")
				//document.getElementById("#scoreCount").innerHTML()
			
				totalClick = 0
			}	
		}

	} ) // end event listener
}



	