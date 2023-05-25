//=================================Dashboard Sidebar==========================================
    
const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show__sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide__sidebar-btn');

//shows sidebar on small devices
const showSidebar = () => {
    sidebar.classList.toggle('active');
    showSidebarBtn.classList.toggle('is-active');
    hideSidebarBtn.classList.toggle('is-active');
}

//hides sidebar on small devices
const hideSidebar = () => {
    sidebar.classList.toggle('active');
    showSidebarBtn.classList.toggle('is-active');
    hideSidebarBtn.classList.toggle('is-active');
}

showSidebarBtn.addEventListener('click', showSidebar);
hideSidebarBtn.addEventListener('click', hideSidebar);