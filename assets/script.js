// declaration block

const startTime = 80;
let questionNumber = 0;
let answerNumber = 0;
let time = startTime;

const questions = ["Commonly used data types do NOT include:","The condition in an 'If/else' statement is enclosed with _____","Arrays in javascript can be used to store ______","String Values must be stored in _____ when being assigned to variables.","A very useful tool during development and debugging for printing content to the debugger is:"];

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

const timer = document.getElementById('timer');

//list elements - not the buttons
const answerOne = document.getElementById('answerOne');

const answerTwo = document.getElementById('answerTwo');

const answerThree = document.getElementById('answerThree');

const answerFour = document.getElementById('answerFour');



startButton.addEventListener('click',()=>{
    quiz();
    timeStart();
});

answerOneButton.addEventListener('click',quiz);
answerTwoButton.addEventListener('click',quiz);
answerThreeButton.addEventListener('click',quiz);
answerFourButton.addEventListener('click',quiz);

//NOT WORKING?

//const incorrectAnswer = document.getElementsByClassName('incorrect');


//incorrectAnswer.addEventListener('click',wrongAnswer);

//function wrongAnswer(){
//    time = time - 10;
//}


function quiz () {
    if (questionNumber < questions.length) {
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

    else {
        const score = time;
        questionEl.textContent = ("All Done!")
        answerOneButton.classList.add('hide');
        answerTwoButton.classList.add('hide');
        answerThreeButton.classList.add('hide');
        answerFourButton.classList.add('hide');

        timer.classList.add('hide');

        answerOne.textContent = ('Your score is: ' + score);
        
        answerTwo.innerHTML = ("<form id='entryForm'><label for='initials'>Initials</label><br><input type='text' id='initials' name='initials'><input type='submit'></form>")
    } 

    if (answerNumber=2){
        answerThreeButton.classList.add('incorrect');
        answerFourButton.classList.remove('incorrect');
    }
    
    if (answerNumber = 3){
        answerThreeButton.classList.remove('incorrect');
        answerFourButton.classList.add('incorrect');
    }
    
    if (answerNumber = 4){
        answerThreeButton.classList.add('incorrect');
        answerFourButton.classList.remove('incorrect');
    }
    answerNumber++;
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


