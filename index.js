
// ============
// Creating a responsive navbar component 
// ============

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click",() => {
  headerElem.classList.toggle("active")
})



// =============== Creating a portfolio tabbed coponent =============== //

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll('.img-overlay');

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    // to find the number in data attr
    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));
    img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"))
})


new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay : {
        delay:2500
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // JS Media  Query Responsivness using jS

  const myJsmedia = (widthSize) => {
    if(widthSize.matches) {
      new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
       
      });
    }
    else {
    
        new Swiper(".mySwiper", {
          slidesPerView: 2,
          spaceBetween: 30,
         
        });
    
  }
}

  const widthSize = window.matchMedia("(max-width:780px)");
  // Call listner function at run time
  myJsmedia(widthSize);
  // Attach listner function on state change
  widthSize.addEventListener('change', myJsmedia)


  //   Scroll to top button
  //  here we have created an element with the help of javascript without using html

  const heroSection = document.querySelector(".section-hero")
  const footerElem = document.querySelector(".section-footer");
  const scrollElement = document.createElement("div");
  scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
  footerElem.after(scrollElement);

  const scrollTop = () => {
    heroSection.scrollIntoView({behavior:"smooth"})
  }
  scrollElement.addEventListener("click",scrollTop)

  

 