
var questions;

fetch('/questions.json')
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        questions = json
        newQuestion()
        fill()
        addListener()
    })

function checkHelpText() {
    var elements = document.getElementById("saved-questions-list").getElementsByTagName("li")
    if (length === 0) {
        document.getElementById("list-info-text").style.visibility = 'hidden'
    } else {
        document.getElementById("list-info-text").style.visibility = 'visible'
    }
}

function deleteQuestion(node) {
    console.log(node)
}

function addListener() {
    document.getElementById("saved-questions-list")
    .addEventListener("click", function (e) {
        var tgt = e.target;
        if (tgt.tagName.toUpperCase() == "LI") {
            tgt.parentNode.removeChild(tgt);
        }
    });
}


function saveQuestion() {
    var question = document.getElementById("main-question").innerHTML

    var node = document.createElement("LI");
    node.innerHTML = question
    node.onclick = deleteQuestion(this)

    document.getElementById("saved-questions-list").appendChild(node)

    setTimeout(function () {
        node.className = node.className + " show";
    }, 10);
    newQuestion()
    checkHelpText()
}

function fill() {
    var elements = document.getElementById("saved-questions-list").getElementsByTagName("li")

    for (var i = 0; i < elements.length; i++) {
        elements[i].innerHTML = getNewQuestion();
    }
}

function getNewQuestion() {
    let index = Math.floor(Math.random() * (questions.length - 1))
    return questions[index].question
}

function newQuestion() {
    document.getElementById("main-question").innerHTML = getNewQuestion()
}


