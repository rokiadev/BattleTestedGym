/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
function scrollActive() {
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-list a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive);
/*=============== PERKS SWIPER ===============*/
let swiperPerks = new Swiper(".perks-slider", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: '1',
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

/*=============== PERKS SHOW ===============*/
const notes = document.querySelectorAll('.note');

// Loop through each note to add click event
notes.forEach(note => {
  const arrowIcon = note.querySelector('i');
  const noteText = note.querySelector('.note-text');

  // Initially hide the note text
//   noteText.style.display = 'none';

  // Add click event on the icon
  arrowIcon.addEventListener('click', () => {
    // Toggle the visibility of the note text
    if (noteText.classList.contains('show')) {
      noteText.classList.remove('show');
    //   noteText.style.display = 'none'; // Hide text
      arrowIcon.classList.remove('ri-arrow-up-s-line');
      arrowIcon.classList.add('ri-arrow-down-s-line'); // Change to 'down' arrow
    } else {
      noteText.classList.add('show');
    //   noteText.style.display = 'block'; // Show text
      arrowIcon.classList.remove('ri-arrow-down-s-line');
      arrowIcon.classList.add('ri-arrow-up-s-line'); // Change to 'up' arrow
    }
  });
});





// =====================================couch visible
// Select all elements with .visible and .couch-about classes
const visibleElements = document.querySelectorAll('.visible');
const couchAboutElements = document.querySelectorAll('.couch-about');

// Loop through each .visible element
visibleElements.forEach((visibleElement, index) => {
    // Hide the corresponding .couch-about element initially
    couchAboutElements[index].style.display = 'none';
  
    // Add click event listener to each .visible element
    visibleElement.addEventListener('click', () => {
        // Toggle the display style of the corresponding .couch-about element
        if (couchAboutElements[index].style.display === 'none') {
            couchAboutElements[index].style.display = 'block';
                couchAboutElements[index].classList.toggle('show');
        } else {
            couchAboutElements[index].style.display = 'none';
        }
    });
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300,
  reset: true,
})
sr.reveal(`.header, .left`)
sr.reveal(`.section-subtitle`, {origin: 'right',delay: 500})
sr.reveal(`.foot-logo, .hours, .contact-info, .social-info, .copy-right`, {interval: 200})
sr.reveal(`.cont, .right`, {delay: 500, interval: 100, origin: 'bottom'})
sr.reveal(`.about-image, form, .start-data, table, .youth-slides, .box-slides`, {delay: 1000, origin: 'left'})
sr.reveal(`.home-image, .back-2, .back-3, .couch`, {origin: 'left', interval: 600})

sr.reveal(`.data-text, .home-text, .section-title, .class-data, .youth-text1, .youth-text2, .boxing-text1, .boxing-text2`, {origin: 'right', interval: 600})
sr.reveal(`.start-image`, {delay: 600, origin: 'bottom'})
sr.reveal(`.perks-slider, .card`, {interval: 300})



