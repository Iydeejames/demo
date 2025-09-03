//Navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
    navbar.classList.toggle('change');
    menu.classList.toggle('change')
});
//End of Navbar

// Modal logic
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".pricing-card-btn").forEach(button => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "block";
    });
  });

  document.querySelectorAll(".modal-close").forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
      closeBtn.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
    }
  });
});


/* Section 3 pricing Cards
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 70,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
});
 End of Section 3 pricing Cards */