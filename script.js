//Array list of 5 letter words
var fiveLetterWords = [
    "ADMIN", "ADMIT", "BACON", "BAKED", "BAKER", "CLIMB", "DAIRY", "DANCE", "BREAD", "EARLY",
	"EARTH", "FRESH", "FLASH", "HONEY", "GRAPE", "SCARF", "ZEBRA", "ENTRY", "BLOCK", "AFTER",
	"LAMBS", "ROACH", "SCALE", "SNAKE", "SCORE", "SPEAK", "SUITE", "FANCY", "DELAY", "BASIC",
	"PLANK", "CRUSH", "CHARM", "FROST", "CRISP", "BOUND", "SWORD", "HORSE", "DRIFT", "SHOUT", 
    "FLINT", "TRACE", "CROWN", "GLOVE", "VAPOR", "BIRTH", "VEXIL", "ROADS", "TREND", "QUICK"
];

//Randomly select a word from the array
var word = fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
var noOfAttempts = 5;
var score = 0;

//function to update the styles based on the number of remaining attempts
function updateStyle() {
    if (noOfAttempts == 4) document.getElementById('r-0').style.backgroundColor = '#dcffd3';
    if (noOfAttempts == 3) document.getElementById('r-1').style.backgroundColor = '#dcffd3';
    if (noOfAttempts == 2) document.getElementById('r-2').style.backgroundColor = '#dcffd3';
    if (noOfAttempts == 1) document.getElementById('r-3').style.backgroundColor = '#dcffd3';
    if (noOfAttempts == 0) document.getElementById('r-4').style.backgroundColor = '#dcffd3';
}

function hasDuplicateLetters(str) {
    return new Set(str).size !== str.length;
}
// Function to check the word input by the user
function checkWord() {
    let answer = prompt("Please Enter a word: ");
	answer = answer.toUpperCase();
    
    // When the user clicks cancel
    if (answer == null) {
        alert("You have canceled the input.")
        return;
    }
    
    // Checks if the word entered is not a 5-letter word
    if (answer.length !== 5) {
        alert("Please enter a 5 letter word.");
        return;
    }
    // Check if the input is a number instead of a 5-letter word
    if (!isNaN(answer)) {
        alert("Please enter a valid 5 letter word, not a number.");
        return;
    }
	
	if(hasDuplicateLetters(answer)) {
		alert("Please enter a 5 letter word without duplicate letters.");
		return;
	}

    let count = 0;
    //checks the first letter
    if (answer[0] === word[0]) {
        document.getElementById('r-' + (5 - noOfAttempts) + '-0').innerHTML = answer[0];
        document.getElementById('r-' + (5 - noOfAttempts) + '-0').style.backgroundColor = '#90d679';
        count++;
    } else if (word.indexOf(answer[0]) >= 0) {
        document.getElementById('r-' + (5 - noOfAttempts) + '-0').innerHTML = answer[0];
        document.getElementById('r-' + (5 - noOfAttempts) + '-0').style.backgroundColor = '#fdf42e';
    } else {
        document.getElementById('r-' + (5 - noOfAttempts) + '-0').innerHTML = answer[0];
        document.getElementById('r-' + (5 - noOfAttempts) + '-0').style.backgroundColor = '#b1b1b1';
    }
    
    //checks the second letter
    if (answer[1] === word[1]) {
        document.getElementById('r-' + (5 - noOfAttempts) + '-1').innerHTML = answer[1];
        document.getElementById('r-' + (5 - noOfAttempts) + '-1').style.backgroundColor = '#90d679';
        count++;
    } else if (word.indexOf(answer[1]) >= 0) {
        document.getElementById('r-' + (5 - noOfAttempts) + '-1').innerHTML = answer[1];
        document.getElementById('r-' + (5 - noOfAttempts) + '-1').style.backgroundColor = '#fdf42e';
    } else {
        document.getElementById('r-' + (5 - noOfAttempts) + '-1').innerHTML = answer[1];
        document.getElementById('r-' + (5 - noOfAttempts) + '-1').style.backgroundColor = '#b1b1b1';
    }

    //checks the third letter
    if (answer[2] === word[2]) {
        document.getElementById('r-' + (5 - noOfAttempts) + '-2').innerHTML = answer[2];
        document.getElementById('r-' + (5 - noOfAttempts) + '-2').style.backgroundColor = '#90d679';
        count++;
    } else if (word.indexOf(answer[2]) >= 0) {
        document.getElementById('r-' + (5 - noOfAttempts) + '-2').innerHTML = answer[2];
        document.getElementById('r-' + (5 - noOfAttempts) + '-2').style.backgroundColor = '#fdf42e';
    } else {
        document.getElementById('r-' + (5 - noOfAttempts) + '-2').innerHTML = answer[2];
        document.getElementById('r-' + (5 - noOfAttempts) + '-2').style.backgroundColor = '#b1b1b1';
    }

    //checks the fourth letter
    if (answer[3] === word[3]) {
        document.getElementById('r-' + (5 - noOfAttempts) + '-3').innerHTML = answer[3];
        document.getElementById('r-' + (5 - noOfAttempts) + '-3').style.backgroundColor = '#90d679';
        count++;
    } else if (word.indexOf(answer[3]) >= 0) {
        document.getElementById('r-' + (5 - noOfAttempts) + '-3').innerHTML = answer[3];
        document.getElementById('r-' + (5 - noOfAttempts) + '-3').style.backgroundColor = '#fdf42e';
    } else {
        document.getElementById('r-' + (5 - noOfAttempts) + '-3').innerHTML = answer[3];
        document.getElementById('r-' + (5 - noOfAttempts) + '-3').style.backgroundColor = '#b1b1b1';
    }

    //checks the fifth letter
    if (answer[4] === word[4]) {
        document.getElementById('r-' + (5 - noOfAttempts) + '-4').innerHTML = answer[4];
        document.getElementById('r-' + (5 - noOfAttempts) + '-4').style.backgroundColor = '#90d679';
        count++;
    } else if (word.indexOf(answer[4]) >= 0) {
        document.getElementById('r-' + (5 - noOfAttempts) + '-4').innerHTML = answer[4];
        document.getElementById('r-' + (5 - noOfAttempts) + '-4').style.backgroundColor = '#fdf42e';
    } else {
        document.getElementById('r-' + (5 - noOfAttempts) + '-4').innerHTML = answer[4];
        document.getElementById('r-' + (5 - noOfAttempts) + '-4').style.backgroundColor = '#b1b1b1';
    }

    // If the user guessed the word
    if (count === 5) {
        alert("Congratulations! You've guessed the word!");
        alert("Refresh the page to play again.");
        score++;
        return;
    }

	// If the user has not guessed the word yet
    if (count < 5) {
        noOfAttempts--;
        updateStyle();
    }
    
    // If the user ran out of health and still didn't guess the word.
    if (noOfAttempts === 0) {
        alert(`Game Over! The word was: ${word}, refresh the page to play again`);
    }
}