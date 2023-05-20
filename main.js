const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');
const navItems = document.querySelector('.nav__items');

//Creating quiz
const addAnswerBtn = document.querySelector('.add__answers-btn');
const createQuizSectionContainer = document.querySelector('.createquiz__section-container');
const addQuestionBtn = document.querySelector('.add__question-btn');

openNavBtn.addEventListener('click', function() {
    openNavBtn.classList.toggle('is-active')
    closeNavBtn.classList.toggle('is-active')
    navItems.classList.toggle('active')
})

closeNavBtn.addEventListener('click', function() {
    openNavBtn.classList.toggle('is-active')
    closeNavBtn.classList.toggle('is-active')
    navItems.classList.toggle('active')
})

//===================================Creating quiz===========================================
const clonedQuizCardNodes = [];
const clonedTrashButtonNodes = [];
const clonedQuestionNum = [];
var numOfQuestions = 0;
var notLocked = true;

//Creates the overall div for the quiz section
const createQuizSection = document.createElement("div");
createQuizSection.className = 'createquiz__section';
const inputDivider1 = document.createElement("div");
inputDivider1.className = 'input__dividers';

//Create header seciont with delete question button and question number
const createQuizHeader = document.createElement("div");
createQuizHeader.className = 'createquiz__header';
const h4Number = document.createElement("h3");
const createTrashSection = document.createElement("button");
createTrashSection.className = 'delete__question-btn';
const createTrashIcon = document.createElement("i");
createTrashIcon.className = 'fa-solid fa-trash';
createTrashSection.appendChild(createTrashIcon);

//Creates the question section
const h4Question = document.createElement("h3");
h4Question.textContent = "Question:";
const questionInput = document.createElement("input");
questionInput.type = 'text';

const inputDivider2 = document.createElement("div");
inputDivider2.className = 'input__dividers';

//Creates the whole answers section
const h4Answers = document.createElement("h3");
h4Answers.textContent = 'Answers: ';
const multipleChoiceInputs = document.createElement("div");
multipleChoiceInputs.id = 'multiplechoice__inputs';
const addAnswersBtn = document.createElement("button");
addAnswersBtn.className = 'add__answers-btn btn';
addAnswersBtn.textContent = 'Add Answer Choice';

//Creates the elements necessary for one of the answer inputs
const newAnswerField = document.createElement("div");
newAnswerField.className = 'answer__field';
const newAnswerInputContainer = document.createElement("div");
newAnswerInputContainer.className = 'answer__input';
const answerChoiceNumber = document.createElement("h4");
answerChoiceNumber.textContent = 'O ';
const answerInput = document.createElement("input");
answerInput.type = 'text';

//Creates the error message the pops up when more than 5 answers are added
const errorMessage = document.createElement("h5");
errorMessage.textContent = 'Sorry, 5 choices max'
errorMessage.className = 'alert__message error';
errorMessage.style.display = 'none';

//Creates the delete (X) button element 
const deleteButton = document.createElement("button");
deleteButton.className = 'delete__answer-btn';
const deleteButtonIcon = document.createElement("i");
deleteButtonIcon.className = 'fa-solid fa-xmark';
deleteButton.appendChild(deleteButtonIcon);

createQuestionClone();

addQuestionBtn.addEventListener('click', function(event) {
    event.preventDefault();
    createQuestionClone();
})

function createQuestionClone() {
    var answerCounter = 0;
    const clonedDeleteNodes = [];
    const clonedAnswerFieldNodes = [];
    numOfQuestions++;

    //Clone quiz divs section
    const createQuizSectionClone = createQuizSection.cloneNode(true);
    const inputDividerClone1 = inputDivider1.cloneNode(true);
    const inputDividerClone2 = inputDivider2.cloneNode(true);

    //Clone header section, trash icon, and question number
    const createQuizHeaderClone = createQuizHeader.cloneNode(true);
    const h4NumberClone = h4Number.cloneNode(true);
    h4NumberClone.textContent = numOfQuestions + ". ";
    clonedQuestionNum.push(h4NumberClone);
    const createTrashSectionClone = createTrashSection.cloneNode(true);
    clonedTrashButtonNodes.push(createTrashSectionClone);
    //Add to quiz section div
    createQuizHeaderClone.appendChild(h4NumberClone);
    createQuizHeaderClone.appendChild(createTrashSectionClone);
    createQuizSectionClone.appendChild(createQuizHeaderClone);
    console.log(clonedTrashButtonNodes.length);


    //Add question and input clones into divider1 div clone
    const h4QuestionClone = h4Question.cloneNode(true);
    const questionInputClone = questionInput.cloneNode(true);
    inputDividerClone1.appendChild(h4QuestionClone);
    inputDividerClone1.appendChild(questionInputClone);

    //Create answer form clone
    const h4AnswersClone = h4Answers.cloneNode(true);
    const multipleChoiceInputsClone = multipleChoiceInputs.cloneNode(true);
    const addAnswersBtnClone = addAnswersBtn.cloneNode(true);

    //Create error message clone
    const errorMessageClone = errorMessage.cloneNode(true);

    //Creates an initial answer input
    createAnswerField();

    //Appends the elements so the layout is correct (see comment on create-quiz for full layout)
    inputDividerClone2.appendChild(h4AnswersClone);
    inputDividerClone2.appendChild(multipleChoiceInputsClone);
    inputDividerClone2.appendChild(errorMessageClone);
    inputDividerClone2.appendChild(addAnswersBtnClone);

    addAnswersBtnClone.addEventListener('click', function(event) {
        event.preventDefault();

        //Checks the amount of answers, doesn't allow for more than 5
        if(answerCounter < 5){
            errorMessage.style.display = 'none';
            createAnswerField();
        } else {
            errorMessage.style.display = 'flex';
        }
        
    })

    createTrashSectionClone.addEventListener('click', function(event) {
        event.preventDefault();
        
        if(numOfQuestions > 1 && notLocked) {
            const trashIndex = clonedTrashButtonNodes.indexOf(event.target.parentNode);
            notLocked = false;
            numOfQuestions--;
            console.log(clonedTrashButtonNodes.length);

            setTimeout(function() {
                clonedQuizCardNodes[trashIndex].style.opacity = '0';
                setTimeout(function() {
                    clonedQuizCardNodes[trashIndex].remove();
                    clonedQuizCardNodes.splice(trashIndex, 1);
                    clonedTrashButtonNodes.splice(trashIndex, 1);
                    clonedQuestionNum.splice(trashIndex, 1);
                    
                    resetQuestionNumber();
                    resetMouseTrashHover();
                    notLocked = true;
                    if(numOfQuestions == 1) {
                        removeMouseTrashHover(0);
                    } else {
                        mouseTrashHover(0);
                    }
                }, 1000);
            }, 100);
        }
    })

    mouseTrashHover(0);
    mouseTrashHover(numOfQuestions-1);

    if(numOfQuestions == 1) {
        removeMouseTrashHover(0);
    }
    

    //Checks which delete button is being clicked and deletes the answer input
    function handleButtonClick(event) {
        event.preventDefault();
        const buttonIndex = clonedDeleteNodes.indexOf(event.target.parentNode);

        clonedAnswerFieldNodes[buttonIndex].remove();
        clonedDeleteNodes.splice(buttonIndex, 1);
        clonedAnswerFieldNodes.splice(buttonIndex, 1);
        errorMessage.style.display = 'none';
        answerCounter--;

        if(answerCounter==1) {
            clonedDeleteNodes[0].style.display = 'none';
        } else {
            clonedDeleteNodes[0].style.display = 'flex';
        }
    }

    function createAnswerField() {
        answerCounter++;
        const clonedAnswerField = newAnswerField.cloneNode(true);
        const clonedAnswerInputContainer = newAnswerInputContainer.cloneNode(true);
        const clonedChoice = answerChoiceNumber.cloneNode(true);
        const clonedAnswerInput = answerInput.cloneNode(true);
    
        //Added 'O' and the answer input in the div container
        clonedAnswerInputContainer.appendChild(clonedChoice);
        clonedAnswerInputContainer.appendChild(clonedAnswerInput);
    
        //Creates a clone node for X button, adds it to the array
        const clonedDeleteNode = deleteButton.cloneNode(true);
        clonedDeleteNode.addEventListener('click', handleButtonClick);
        clonedDeleteNodes.push(clonedDeleteNode);
    
        //Ensures when there's only one answer, you won't be allowed to delete it
        if(answerCounter==1) {
            clonedDeleteNodes[0].style.display = 'none';
        } else {
            clonedDeleteNodes[0].style.display = 'flex';
        }
        
        //Appends the elements into the correct layout
        clonedAnswerField.appendChild(clonedAnswerInputContainer);
        clonedAnswerField.appendChild(clonedDeleteNode);
        clonedAnswerFieldNodes.push(clonedAnswerField);
        multipleChoiceInputsClone.appendChild(clonedAnswerField);
    }

    function mouseTrashHover(i) {
        clonedTrashButtonNodes[i].style.color = '#182c25';
        clonedTrashButtonNodes[i].disabled = false;
        clonedTrashButtonNodes[i].addEventListener('mouseover', trashColorRed);
        clonedTrashButtonNodes[i].addEventListener('mouseleave', trashColorDark);
    }

    function removeMouseTrashHover(i) {
        clonedTrashButtonNodes[i].style.color = '#5E716A';
        clonedTrashButtonNodes[i].disabled = true;
        clonedTrashButtonNodes[i].removeEventListener('mouseover', trashColorRed);
        clonedTrashButtonNodes[i].removeEventListener('mouseleave', trashColorDark);
    }

    function trashColorRed() {
        this.style.color = '#e31b17';
    }

    function trashColorDark() {
        this.style.color = '#182c25';
    }

    function resetQuestionNumber() {
        for(var i=1; i<=clonedQuestionNum.length; i++) {
            clonedQuestionNum[i-1].textContent = i + ". ";
        }
    }

    function resetMouseTrashHover() {
        for(var i=0; i<clonedQuestionNum.length; i++) {
            removeMouseTrashHover(i);
        }
        for(var i=0; i<clonedQuestionNum.length; i++) {
            mouseTrashHover(i);
        }
    }

    
    createQuizSectionClone.appendChild(inputDividerClone1);
    createQuizSectionClone.appendChild(inputDividerClone2);
    createQuizSectionContainer.appendChild(createQuizSectionClone);
    clonedQuizCardNodes.push(createQuizSectionClone);
}


//================================Create Navbar for Quiz=======================================

window.addEventListener('scroll', function() {
    const navSelector = this.document.getElementById('createquiz__secondnav');
    const quizTitle = this.document.querySelector('.createquiz__title');
    if(this.window.scrollY > 80) {
        navSelector.style.display = 'flex';
        quizTitle.style.display = 'none';
    } else {
        navSelector.style.display = 'none';
        quizTitle.style.display = 'flex';
    }
})

