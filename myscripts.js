let mouseCursor = document.querySelector('.cursor');
let links = document.querySelectorAll('.enter');


window.addEventListener('mousemove', cursor);

function cursor(e) {
    console.log(e);
    // console.log(mouseCursor)
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}


links.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-grow');
        link.classList.remove('hover-link');
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-grow');
        link.classList.add('hover-link');
    });
});