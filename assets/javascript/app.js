/* ------------ VARIABLES ------------ */
var currentQuestion;
var correctAnswer;
var incorrectAnswer;
var skipped;
var seconds;
var quizTime;
var time;
var answered;
var userSelection;


/* --------------- START GAME -------------- */
$("#start").on("click", function () {
    $(".intro-container").hide();
    startTrivia();
    // $(".display-container").show();
});

 /* --------------- PLAY AGAIN ---------------*/
 $("#again").on("Click", function () {
     $("#display-container").show();  
    startTrivia();
});

/* -------------- QUESTIONS ------------- */
var trivia = [{
    question: "What did Scuttle call a fork?",
    choices: ["Dinglehopper", "Snarfblatt", "Zygost", "Fork"],
    answer: 0,
},
{
    question: "What body part did Scuttle check on Prince Eric to confirm life?",
    choices: ["Wrist", "Chest", "Head", "Foot"],
    answer: 3,
},
{
    question: "How many dozen of eggs did Gaston eat each morning when he was a lad?",
    choices: ["Three", "Four", "Five", "What's a lad?"],
    answer: 1,
},
{
    question: "What color was Cinderella's original dress to the ball?",
    choices: ["Pink", "Blue", "White", "Purple"],
    answer: 0,
},
{
    question: "Finish the lyrics: I know you I walked with you once upon a ______.",
    choices: ["Blue Moon", "Dream", "Starry Night", "Time"],
    answer: 1,
},
{
    question: "Which dwarf doesn't belong?",
    choices: ["Bashful", "Grumpy", "Doc", "Joyful"],
    answer: 3,
},
{
    question: "Pochantas was friends with a _____ and a _____.",
    choices: ["Hummingbird, Possum", "Hummingbird, Raccoon", "Possum, Parrot", "Raccoon, Parrot"],
    answer: 1,
},
{
    question: "Moana's journey was to return Te Fiti's _____.",
    choices: ["Chicken", "Fish Hook", "Heart", "Ring"],
    answer: 2,
},
{
    question: "hat animal did Princess Jasmine have as a pet?",
    choices: ["Cheetah", "Jaguar", "Leopard", "Tiger"],
    answer: 3,
},
{
    question: "What was Tiana's dream?",
    choices: ["Find true love", "Kiss a frog", "Marry a Prince", "Open a restaurant"],
    answer: 3,
},
{
    question: "Who joined the army in place of their dad?",
    choices: ["Ariel", "Elsa", "Merida", "Mulan"],
    answer: 3,
},
{
    question: "Sven is a _____.",
    choices: ["Prince", "Reindeer", "Snowman", "Troll"],
    answer: 1,
},
{
    question: "What color is Merida's hair?",
    choices: ["Black", "Blonde", "Red", "White"],
    answer: 2,
},
{
    question: "What was Simba's mother's name?",
    choices: ["Anna", "Jasmine", "Nala", "Sarabi"],
    answer: 3,
},
{
    question: "Who's hand does the Walt Disney statue hold?",
    choices: ["Mickey Mouse", "Minnie Mouse", "Donald Duck", "Goofy"],
    answer: 0,
}];

function startTrivia() {
    $(".display-container").show();
    $("#number-right").empty();
    $("#number-wrong").empty();
    $("#number-skipped").empty();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    skipped = 0;
    newQuestion();
}

function newQuestion() {
    $("#right-answer").empty();
    answered = true;

    $("#currentQuestion").html("Question" + (currentQuestion + 1) + "/" + trivia.length);
    $("#question").html("<h1>" + trivia[currentQuestion].question + "</h1>");
    for (var i = 0; i < 4; i++) {
        var selections = $("<div>");
        selections.text(trivia[currentQuestion].choices[i]);
        selections.attr({ "data-guess": i });
        selections.addClass("thisSelection");
        $("#choices").append(selections);
    }
    run();


    /* Pausing the Timer When an Answer is Selected */
    $("#thisSelection").on("click", function () {
        userSelection = $(this).data("guess");
        clearInterval(intervalId);
        finalResults();
    })
}

/* ------------- TIMER------------- */
function run() {
    quizTime = 15;
    $("#time-remaining").html("<h2>" + "Time Remaining: " + quizTime + "</h2>");
    answered = true;

    intervalId = setInterval(decrement, 1000);
}


//     
//     countdown = true;

// }
// function stop() {
//     clearInterval(intervalId);

// }
function decrement() {
    quizTime--;
    $("#time-remaining").html("<h2>" + "Time Remaining: " + quizTime + "</h2>");
    if (quizTime < 1) {
        clearInterval(intervalId);
        answered = false;;
        finalResults();
    
    };
};



function finalResults() {
    $("#currentQuestion").empty();
    $(".thisSelection").empty();
    $("#question").empty();

    var correctAnswerText = trivia[currentQuestion].choices[trivia[currentQuestion].answer];
    var correctGuess = trivia[currentQuestion].answer;

    if ((userSelection === correctGuess) && (answered === true)) {
        correctAnswer++;

    } else if ((userSelection != correctGuess) && answered === true) {
        incorrectAnswer++;
        $(".right-answer").html("The correct answer was: " + correctAnswerText);
    } else {
        skipped++;
        $(".right-answer").html("The correct answer was: " + correctAnswerText);
        answered = true;
    }
    if (currentQuestion === (trivia.length - 1)) {
    setTimeout(score, 5000)
    } else {
        currentQuestion++;
        setTimeout(newQuestion, 5000);
    }
}

function score() {
    // $(".intro-container").hide();
    // $(".display-container").hide();
    // $(".results-container").show();
    $("#time-remaining").empty();
    $(".right-answer").empty();
    $("#number-right").html("Correct: " + numberCorrect);
    $("#number-wrong").html("Incorrect: " + numberWrong);
    $("#skipped").html("No response: " + numberSkipped);
 

}


