// timers
// questions
// recognize radio button
// display answer
// page refresh or continuous append/prepend or whole new page???
// math to calculate score
// display score
// link to try again and reload
// possible questions randomized


function displayRadioValue () {
    document.getElementById("results").innerHTML= "";
    var ele = document.getElementsByTagName("input");
    for (i=0; i < ele.length; i++) {
        if (ele[i].type="radio") {
            if(ele[i].checked)
            document.getElementById("results").innerHTML
            += ele[i].name + ": " 
            + ele[i].value + "<br>"
        }
    }
}

$("#submit").on("click", displayRadioValue);