const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');
const navItems = document.querySelector('.nav__items');
const addAnswerBtn = document.getElementById('add__answers-btn');
const multipleChoiceInputs = document.getElementById('multiplechoice__inputs');

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

addAnswerBtn.addEventListener('click', function() {
    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    
    multipleChoiceInputs.appendChild(answerInput);
})
