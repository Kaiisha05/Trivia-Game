/* ------------ VARIABLES ------------ */
var numberCorrect = 0;
var numberWrong = 0;
var numberSkipped = 0;
var userSelection;
// var setTimeout
// var endGame;
var countdown = false;
// want the quiz time to give 225 seconds, which is equivalent to 15 seconds per question
var quizTime = 15;
// var beginGame
var intervalId;
var array = [];
// var q = triviaQuestions.length;

// $("#start").on("click", function () {
//     $(".intro-container").hide();
//     $(".question-container").show();
//     run()
// });
/* -------------- START TRIVIA -------------- */
$(document).ready(function () {
    $(".question-container").hide();
    $(".results-container").hide();
    $("#start").on("click", function () {
        $("#intro-container").hide();
        startTrivia();
        run();
        for (var i = 0; i < trivia.length; i++) {
            /*research */
            array.push(trivia[i]);
        }
    })
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
    question: "Who's hand does Walt Disney hold?",
    choices: ["Mickey Mouse", "Minnie Mouse", "Donald Duck", "Goofy"],
    answer: 0,
}];
console.log(trivia)
/* ------------- FUNCTIIONS ------------- */

/* ------------- TIMER------------- */
function run() {
    clearInterval(intervalId);
    countdown = true;
    intervalId = setInterval(decrement, 1000);
}
function stop() {
    clearInterval(intervalId);

}
function decrement() {
    quizTime--;
    $("#time-remaining").html("<h2>" + "Time Remaining: " + quizTime + "</h2>");
    if (quizTime === 0) {
        numberSkipped++;
        $("question-container").html("<h2>" + "Oh no, time's up, the correct answer is: " + triviaQuestions.choice[triviaQuestions.answer] + "</h2>");
        countdown = false;
        stop();
    };
};

/* ------------- DISPLAY QUESTIONS ------------- */

// function startTrivia() {
//     var shuffle = Math.floor(Math.random() * trivia.question.length);
//     userSelection = trivia.question[shuffle];
//     $("#questions").html("<h2>" + userSelection.question + "</h2>");
//     for (var i = 0; i < userSelection.choice.length; i++) {
//         var selection = $("<div>");
//         selection.addClass("selected");
//         selection.html(userSelection.choices[i]);
//         userSelection.attr("data-guess", i);
//         $(".question-container").append(selection);
//     };
// };



$("#submit").click(function () {
    $(".question-container").hide();
    $(".results-container").show();
});

// startTrivia();
// need functionality for PLAY AGAIN BUTTON













// $("#quiz-questions").html(container)





//         $("#submit").on("click", showResults);
