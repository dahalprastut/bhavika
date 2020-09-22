
// for nav toggle icon start--------
const navIcon = document.querySelector('#nav-icon1');
navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('open');
})


// ---- for nav toggle icon end ----


// ----for nav open animation start ------


const tlNav = gsap.timeline({ paused: true, reversed: true });


tlNav.to('.wrapper', {
    duration: 1,
    left: 0,
    marginTop: 0
})



const hamburger = document.querySelector('#nav-icon1');

hamburger.addEventListener('click', function () {
    if (tlNav.reversed()) {

        tlNav.play();
    } else {
        tlNav.reverse();
    }
})

// ----for nav open animation ends ------

