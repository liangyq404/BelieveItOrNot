let mouseCursor = document.querySelector(".cursor");
let links = document.querySelectorAll('.links li');


window.addEventListener('mousemove', cursor);

function cursor(e) {
    console.log(e);
    // console.log(mouseCursor)
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

links.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove('hover-link');
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.add('hover-link');
    });
});