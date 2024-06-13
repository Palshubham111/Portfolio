let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// multiple -text-----------------------------------
 const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','Backend Developer','Web Designer'],
    typeSpeed:50,
    backSpeed:70,
    backDelay:2000,
    loop:true,

 }); 