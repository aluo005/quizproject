//=================================Article Click================================

const articles = document.querySelectorAll('article');

const articleClicked = () => {
    console.log('clicked article');
    window.location.href = 'quiz.html';
}

articles.forEach((article) => {
    article.addEventListener('click', articleClicked);
})
