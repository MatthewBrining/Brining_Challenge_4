// declaration block
const startTime = 80;
let time = startTime;
const timerEl = document.getElementById('timer');
const questionEl = document.getElementById('question');
const answerOneEl = document.getElementById('answerOne');
const answerTwoEl = document.getElementById('answerTwo');
const answerThreeEl = document.getElementById('answerThree');
const answerFourEl = document.getElementById('answerFour');

// timer
setInterval(countdown, 1000);

function countdown() {
    if (time > -1) {
    timerEl.innerHTML = ("Score: " + time);
    time --;
    }
}

//questions

questionEl.innerHTML = ("Coding Quiz Challenge: Incorrect answers detract from score/time. Select 'Start Quiz' when ready.");

questionEl.innerHTML = ("Commonly used data types do NOT include:");

questionEl.innerHTML = ("The condition in an 'If/else' statement is enclosed with _____");

questionEl.innerHTML = ("Arrays in javascript can be used to store ______");

questionEl.innerHTML = ("String Values must be stored in _____ when being assigned to variables.");

questionEl.innerHTML = ("A very useful tool during development and debugging for printing content to the debugger is:");

questionEl.innerHTML = ("All Done!")

questionEl.innerHTML = ("High Scores");

//answers

answerOneEl.innerHTML = ("1. Strings")
answerOneEl.innerHTML = ("1. Quotes")
answerOneEl.innerHTML = ("1. Numbers and strings")
answerOneEl.innerHTML = ("1. Commas")
answerOneEl.innerHTML = ("1. Javascript")

answerTwoEl.innerHTML = ("2. Booleans")
answerTwoEl.innerHTML = ("2. Curly brackets")
answerTwoEl.innerHTML = ("2. Other Arrays")
answerTwoEl.innerHTML = ("2. Curly brackets")
answerTwoEl.innerHTML = ("2. Terminal/bash")

answerThreeEl.innerHTML =("3. Alerts")
answerThreeEl.innerHTML =("3. Parenthesis")
answerThreeEl.innerHTML =("3. Booleans")
answerThreeEl.innerHTML =("3. Quotes")
answerThreeEl.innerHTML =("3. For loops")

answerFourEl.innerHTML = ("4. Numbers")
answerFourEl.innerHTML = ("4. Square brackets")
answerFourEl.innerHTML = ("4. All of the above")
answerFourEl.innerHTML = ("4. Parenthesis")
answerFourEl.innerHTML = ("4. console.log")