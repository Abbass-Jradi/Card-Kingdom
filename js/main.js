const header = document.getElementById('header');
const magnifying_glass = document.querySelector('.magnifying-glass');
const searching = document.querySelector('.searching');
const three_line_menu = document.querySelector('.three-line-menu');
const side_nav_close = document.querySelector('.side-nav-close');




magnifying_glass.addEventListener('click', () => {
    header.classList.add('active');
    searching.addEventListener('click', () => {
        header.classList.remove('active');    
    })
})

three_line_menu.addEventListener('click', () => {
    header.classList.add('open');
    side_nav_close.addEventListener('click', () => {
        header.classList.remove('open');
    })
})