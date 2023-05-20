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
createQuizSection();
createQuizSection();

addQuestionBtn.addEventListener('click', function(event) {
    event.preventDefault();
    createQuizSection();
})

function createQuizSection(){
    var answerCounter = 0;
    const clonedDeleteNodes = [];
    const clonedAnswerFieldNodes = [];

    //Creates the overall div for the quiz section
    const createQuizSection = document.createElement("div");
    createQuizSection.className = 'createquiz__section';
    const inputDivider1 = document.createElement("div");
    inputDivider1.className = 'input__dividers';

    //Creates the question section
    const h4Question = document.createElement("h3");
    h4Question.textContent = "Question:";
    const questionInput = document.createElement("input");
    questionInput.type = 'text';
    inputDivider1.appendChild(h4Question);
    inputDivider1.appendChild(questionInput);

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

    //Creates an initial answer input
    createAnswerField();

    //Appends the elements so the layout is correct (see comment on create-quiz for full layout)
    inputDivider2.appendChild(h4Answers);
    inputDivider2.appendChild(multipleChoiceInputs);
    inputDivider2.appendChild(errorMessage);
    inputDivider2.appendChild(addAnswersBtn);

    addAnswersBtn.addEventListener('click', function(event) {
        event.preventDefault();

        //Checks the amount of answers, doesn't allow for more than 5
        if(answerCounter < 5){
            errorMessage.style.display = 'none';
            createAnswerField();
        } else {
            errorMessage.style.display = 'flex';
        }  
    })

    //Checks which delete button is being clicked and deletes the answer input
    function handleButtonClick(event) {
        event.preventDefault();
        const buttonIndex = clonedDeleteNodes.indexOf(event.target.parentNode);

        console.log(buttonIndex);

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
        multipleChoiceInputs.appendChild(clonedAnswerField);
    }

    createQuizSection.appendChild(inputDivider1);
    createQuizSection.appendChild(inputDivider2);
    createQuizSectionContainer.append(createQuizSection);
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

