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