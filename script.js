//Navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
    navbar.classList.toggle('change');
    menu.classList.toggle('change')
});
//End of Navbar

document.addEventListener("DOMContentLoaded", () => {
  // Open modal
  document.querySelectorAll(".pricing-card-btn").forEach(button => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      modal.style.display = "block";
      document.body.classList.add("modal-open"); // disable page scroll
    });
  });

  // Close modal
  document.querySelectorAll(".modal-close").forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
      const modal = closeBtn.closest(".modal");
      modal.style.display = "none";
      document.body.classList.remove("modal-open"); // restore scroll
    });
  });

  // Close if clicking outside modal content
  window.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) {
      e.target.style.display = "none";
      document.body.classList.remove("modal-open");
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