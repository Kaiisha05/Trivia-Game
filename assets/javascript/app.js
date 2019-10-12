// timer starts and counts down until it hits 0 or submit button is pressed
// 


var numberCorrect
var numberWrong
var numberSkipped
var setTimeout
var endGame
// want the quiz time to give 225 seconds, which is equivalent to 15 seconds per question
var quizTime = 5;
var beginGame


var intervalId;
$("#start").on("click", function () {
    $(".intro-container").hide();
    $(".question-container").show();
    run()
});
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function stop() {
    clearInterval(intervalId);

}
function decrement() {
    quizTime--;
    $("#time-remaining").html("<h2>" + "Time Remaining: " + quizTime + "</h2>");
    if (quizTime === 0) {
        stop();
    }
}

// run ();

$(document).ready(function () {
    $(".question-container").hide();
    $(".results-container").hide();

});

$("#submit").click(function () {
    $(".question-container").hide();
    $(".results-container").show();
});

// need functionality for PLAY AGAIN BUTTON

// (function() {
// $("#start").on("click", start);










var para = $("<p>")
// trying to create paragraphs to hold the questions


// const quizQuestions = document.getElementById("questions")
// doesn't seem neccessary to keep

const myQuestions = [{
    question: "What did Suttle call a fork?",
    answers: {
        a: "Dinglehopper", b: "Snarfblatt", c: "Zygote", d: "Fork"
    },
    correctAnswer: "a"
},
{
    question: "What body part did Scuttle check on Prince Eric to confirm life?",
    answers: {
        a: "Foot", b: "Wrist", c: "Chest", d: "Head"
    },
    correctAnswer: "a"
},
{
    question: "How many dozen eggs did Gaston eat each morning when he was a lad?",
    answers: {
        a: "Five", b: "Four", c: "Three", d: "What's a lad?"
    },
    correctAnswer: "b"
},
]
console.log(myQuestions)
// logs an array of the questions




// does something, cant recall what...reworking page to have questions load dynamically
// var q = myQuestions
// // doesn't do anything
// var container = $("<div>");

// for (var q = 0; q < myQuestions.length; q++) {
//     $("#questions").text(myQuestions.question)
//     // this does nothing

//     console.log(myQuestions[q].question)
//     // logs the results from line 40 into the console..this function works!
//     var $question = this.createNewQuestion(q);
//     $question.appendTo($quizQuestions);
//     para.append(myQuestions[q].question)
//     // does the same thing as the above code
//     $("#questions").append(myQuestions[q].question)
//     // this works, but groups everything together with no breaks

//     $("#questions").append(para)
//     // does nothing new

// }
// $("#quiz-questions").html(container)



// function buildQuiz() { }
// const output = [];
// // a place to store the html output *shrug*
// function showResults() { }
// // will need to be attached to an onclick event--see line 40
// buildQuiz();
// myQuestions.forEach(
//     (currentQuestion, questionNumber) => {
//         const answers = [];
//         for (letter in currentQuestion.answers) {
//             answers.push(
//                 `<label>
//                 <input type="radio" name="question${questionNumber}" value="${letter}">
//                     ${letter} :
//                 ${currentQuestion.answers[letter]}
//             </label>`
//             )
//         }
//         `<div class="questions"> ${currentQuestion.question} </div>
//         <div class="answers"> ${answers.join("")} </div>`

//         quizQuestions.innerHTML = output.join("");



//         $("#submit").on("click", showResults);
