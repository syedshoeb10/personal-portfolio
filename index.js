const heroSection = document.querySelector(".section-hero");
// ************//
//creating a portfolio tabbed component//


const p_btns = document.querySelector('.p-btns');
const p_btn  = document.querySelectorAll('.p-btn'); // Change 'querySelector' to 'querySelectorAll' and correct the selector
const p_img_elem = document.querySelectorAll('.img-overlay');

p_btns.addEventListener('click', (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) => { // Change 'foEach' to 'forEach'
    curElem.classList.remove("p-btn-active");

   

   // to find the number in dta attr

   const btn_num = p_btn_clicked.dataset.btnNum;
   console.log(btn_num);

   const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

   p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));

   img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));

   p_btn_clicked.classList.add("p-btn-active"); // Change 'classList.aa' to 'classList.add'
});
    
  });
         
  // scroll top button
  // Get a reference to the button element
const scrollToTopButton = document.getElementById("scrollToTopBtn");

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling animation
    });
}

// Show or hide the scroll-to-top button based on the scroll position
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Attach click event to the button
scrollToTopButton.addEventListener("click", scrollToTop);

// animated number sections 

  const counterNum = document.querySelectorAll(".counter-numbers");

  const speed = 200 ;

  counterNum.forEach((curElem) => {

    const updateNumber = () => {

    const targetNumber = parseInt(curElem.dataset.number);

    // console.log(targetNumber);
    const intialNum = parseInt(curElem.innerText);

    // console.log(intialNum);

  const incrementNumber = Math.trunc (targetNumber / speed);
  // console.log(incrementNumber );
  
    if (intialNum < targetNumber) {
      curElem.innerText = `${intialNum + incrementNumber}+`;
      setTimeout(updateNumber,10);// call function after delay time
    }
    
    };
    updateNumber() ;
  });
 
  const worksection = document.querySelector('section-work-data');
  const workObserver = new IntersectionObserver((entries, observer) => {
    const [entry] = entries;
    // console.log(entry);
    if(!entry.isIntersecting) return;
    
  },
  
  {
    root: null,
    threshold:0,
   }
   );

   workObserver.observe(worksection);

  

// creating sticky navbr

const observer = new IntersectionObserver((entries) => {
  const ent = entries[0];
  if (!ent.isIntersecting) {
    document.body.classList.add("sticky");
  } else {
    document.body.classList.remove("sticky"); // Remove the "sticky" class when not intersecting
  }
}, {
  root: null,
  threshold: 0
});

observer.observe(heroSection);


// creating a responsive navbar
  // const mobile_nav = document.querySelector(".mobile-nav-icon");
  // const headerElem = document.querySelector(".header");

  // mobile_nav.addEventListener('click', () => {
  //   headerElem.classList.add("active");
  // });

  // function myFunction() {
  //   var x = document.getElementById("myLinks");
  //   if (x.style.display === "block") {
  //     x.style.display = "none";
  //   } else {
  //     x.style.display = "block";
  //   }
  // }
  
    const mobile_nav = document.querySelector(".mobile-navbar-btn");
    const headerElem = document.querySelector(".header");
  
    mobile_nav.addEventListener('click', () => {
      headerElem.classList.toggle("active");
    });

  

