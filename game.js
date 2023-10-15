let word = [
    {
        "inputs": 5,
        "hint": "Sports",
        "word": "Chess",
    },
    /*{
        "inputs": 6,
        "hint": "European Country Name",
        "words": "France"
    },*/
]

var randomWord

$(document).ready(function(){ 
    randomWord = word[Math.floor(Math.random() * word.length)]
    $("#hint").text(randomWord.hint)
    var lives = randomWord.inputs
    $("#life").text(lives)
    fillBlanks()
})

/*var gameOver = false
function fillBlanks() {
    var guessedLetters = []

    $(".clickable").click(function () {
        if (!gameOver) {
            var correctGuess = false
            var id = $(this).attr("id")
            var lives = parseInt($("#life").text())

            guessedLetters.push(id)

            if (!guessedLetters.includes(id)) {
                for (var i = 0; i < randomWord.word.length; i++) {
                    if (randomWord.word.charAt(i).toLowerCase() === id) {
                        if (lives > 0 && ($(".fill_blanks").eq(i).html() === id)) {
                            $(".fill_blanks").eq(i).html(id)
                            correctGuess = true
                        }
                    }
                }

                if (!correctGuess) {
                    lives--
                    $("#life").text(lives)
                }
    
                if (lives === 0) {
                    $("#result").text("Game Over")
                    gameOver = true
                } 
                else if ($("#blanks").text() === randomWord.word.toLowerCase()) {
                    $("#result").text("You Win!")
                    gameOver = true
                }

                $("#guessed-letters").text(guessedLetters.join(' '));
            }
        }
    })
}*/


var gameOver=false
function fillBlanks() {
    $(".clickable").on("click", function () {
        var correctGuess = false
        let id = $(this).attr("id")
        lives = parseInt($("#life"))

        for (var i = 0; i < randomWord.word.length; i++) { //repeated letter
            if (randomWord.word.charAt(i).toLowerCase() == id) { //if repeated
                if (lives > 0 && ($(".fill_blanks").eq(i).html() == id)) { //lives>0 and i=id
                    $(".fill_blanks").eq(i).html(id)
                    correctGuess = true
                    if($("#blanks").text() === randomWord.word.toLowerCase()) { //if word is complete
                        $("#result").text("You Win!")
                        correctGuess = true
                        gameOver = true
                    }
                }

            }
        }
    })
}

/*$(function() {
    $(".input_field").keyup(function() {
        let id = $(this).attr("id")
        let input_number = id.split("_")[1]
        $(".rep_input").eq(input_number).html($(this).val())//eq = equals
    })
    /*$("#next_game").click(function() {
        fillBlanks()
    })
})*/
