/*toggle navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onClick = () =>{
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active');
}

/*scroll section active link*/

let selection = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    selection.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= '+ id + ']')
            })
        }
    })

/*sticky navbar*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*romove toggle icon and navbar*/
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

/*scroll reveal*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading, .projects h2, .achievements h2', { origin: 'top'});
ScrollReveal().reveal('.home-image, .achievements, .contact form',{ origin: 'buttom'});
ScrollReveal().reveal('.about-image, .about-content',{ origin: 'left'});
ScrollReveal().reveal('.projects p',{ origin: 'right'});

/*typed js*/
const typed = new Typed('.multiple-text', {
strings:  ['College Student', 'Computer Science Student'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 900,
    loop: true,
});