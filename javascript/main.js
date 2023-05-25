//====================================General Navbar===================================
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');
const navItems = document.querySelector('.nav__items');

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