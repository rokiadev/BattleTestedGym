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
    slidesPerView: 'auto',
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
            spaceBetween: 48,
        },
    },
});

/*=============== PERKS SHOW ===============*/
// Select all 'note' elements
const notes = document.querySelectorAll('.note');

// Loop through each note to add click event
notes.forEach(note => {
  const arrowIcon = note.querySelector('i');
  const noteText = note.querySelector('.note-text');

  // Initially hide the note text
  noteText.style.display = 'none';

  // Add click event on the icon
  arrowIcon.addEventListener('click', () => {
    // Toggle the visibility of the note text
    if (noteText.style.display === 'none') {
      noteText.style.display = 'block';
      arrowIcon.classList.replace('ri-arrow-down-s-line', 'ri-arrow-up-s-line'); // Change to 'up' arrow
    } else {
      noteText.style.display = 'none';
      arrowIcon.classList.replace('ri-arrow-up-s-line', 'ri-arrow-down-s-line'); // Change to 'down' arrow
    }
  });
});


// ================ SLIDER BOXING ===================
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("box-slider");
    const sliderUl = slider.querySelector("ul");
    const slides = sliderUl.querySelectorAll("li");

    const slideCount = slides.length;
    const slideWidth = slides[0].offsetWidth;
    const slideHeight = slides[0].offsetHeight;
    const sliderUlWidth = slideCount * slideWidth;

    // Set the slider and ul width/height
    slider.style.width = `${slideWidth}px`;
    slider.style.height = `${slideHeight}px`;
    sliderUl.style.width = `${sliderUlWidth}px`;
    sliderUl.style.marginLeft = `-${slideWidth}px`;

    // Move the last slide to the front to initialize the slider
    sliderUl.insertBefore(sliderUl.lastElementChild, sliderUl.firstElementChild);

    function moveLeft() {
        sliderUl.style.transition = "left 0.5s ease";
        sliderUl.style.left = `${slideWidth}px`;

        setTimeout(() => {
            sliderUl.style.transition = "none";
            sliderUl.insertBefore(sliderUl.lastElementChild, sliderUl.firstElementChild);
            sliderUl.style.left = "";
        }, 200);
    }

    function moveRight() {
        sliderUl.style.transition = "left 0.5s ease";
        sliderUl.style.left = `-${slideWidth}px`;

        setTimeout(() => {
            sliderUl.style.transition = "none";
            sliderUl.appendChild(sliderUl.firstElementChild);
            sliderUl.style.left = "";
        }, 200);
    }

    // Event listeners for the navigation buttons
    document.querySelector("i.control_prev").addEventListener("click", moveLeft);
    document.querySelector("i.control_next").addEventListener("click", moveRight);
});



// ================ SLIDER YOUTH ===================
document.addEventListener('DOMContentLoaded', function() {
    const slideGroup = document.querySelector('.slide_group');
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next_btn');
    const prevBtn = document.querySelector('.previous_btn');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let autoSlideInterval;

    // Function to update slide position
    function goToSlide(index) {
        slideGroup.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    // Move to next slide
    function nextSlide() {
        const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
        goToSlide(newIndex);
    }

    // Move to previous slide
    function prevSlide() {
        const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
        goToSlide(newIndex);
    }

    // Event listeners for navigation buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-slide functionality
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 2000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Start auto-slide when page loads
    startAutoSlide();

    // Pause auto-slide on mouse enter, resume on mouse leave
    document.querySelector('.slider').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.slider').addEventListener('mouseleave', startAutoSlide);
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




