// declaration block

const startTime = 80;
let questionNumber = 0;
let time = startTime;

const questions = ["Commonly used data types do NOT include:","The condition in an 'If/else' statement is enclosed with _____","Arrays in javascript can be used to store ______","String Values must be stored in _____ when being assigned to variables.","A very useful tool during development and debugging for printing content to the debugger is:","All Done!","High Scores"];

const answersOne = ["1. Strings","1. Quotes","1. Numbers and strings","1. Commas","1. Javascript"];

const answersTwo = ["2. Booleans","2. Curly brackets","2. Other Arrays","2. Curly brackets","2. Terminal/bash"];

const answersThree = ["3. Alerts","3. Parenthesis","3. Booleans","3. Quotes","3. For loops"];

const answersFour = ["4. Numbers","4. Square brackets","4. All of the above","4. Parenthesis","4. console.log"];

const timerEl = document.getElementById('timer');

const questionEl = document.getElementById('question');

const startButton = document.getElementById('startBtn');

const answerOneButton = document.getElementById('answerOneButton');

const answerTwoButton = document.getElementById('answerTwoButton');

const answerThreeButton = document.getElementById('answerThreeButton');

const answerFourButton = document.getElementById('answerFourButton');



startButton.addEventListener('click',()=>{
    quiz();
    timeStart();
});

answerOneButton.addEventListener('click',quiz);
answerTwoButton.addEventListener('click', quiz);
answerThreeButton.addEventListener('click', quiz);
answerFourButton.addEventListener('click', quiz);





function quiz () {

//hide start button - unhide other buttons
startButton.classList.add('hide');
answerOneButton.classList.remove('hide');
answerTwoButton.classList.remove('hide');
answerThreeButton.classList.remove('hide');
answerFourButton.classList.remove('hide');


// page setup
questionEl.textContent = (questions[questionNumber]);
answerOneButton.textContent = (answersOne[questionNumber]);
answerTwoButton.textContent = (answersTwo[questionNumber]);
answerThreeButton.textContent =(answersThree[questionNumber]);
answerFourButton.textContent = (answersFour[questionNumber]);

questionNumber++;

}

function timeStart() {

setInterval(countdown, 1000);

function countdown() {
    // start timer/score

    if (time > -1) {
    timerEl.innerHTML = ("Score: " + time);
    time --;
    }
}

}

