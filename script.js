//Navbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click', () => {
    navbar.classList.toggle('change');
    menu.classList.toggle('change')
});
//End of Navbar

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  let started = false; // ensure it runs only once
  const countUp = (el) => {
    const target = +el.getAttribute("data-target");
    const duration = 2000; // total animation time in ms
    const increment = target / (duration / 16); // ~60fps
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        el.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        el.textContent = target + "+";
      }
    };

    updateCounter();
  };

  // Observe when milestone section enters viewport
  const milestoneSection = document.querySelector("#milestone");
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      counters.forEach((counter) => countUp(counter));
      started = true;
    }
  }, { threshold: 0.5 });

  observer.observe(milestoneSection);
});




document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let index = 0;
  let autoSlide;

  const showSlide = (i) => {
    testimonials.forEach((t, idx) => {
      t.classList.remove("active");
      if (idx === i) t.classList.add("active");
    });
    index = i;
  };

  const nextSlide = () => {
    index = (index + 1) % testimonials.length;
    showSlide(index);
  };

  const prevSlide = () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showSlide(index);
  };

  const startAutoSlide = () => {
    autoSlide = setInterval(nextSlide, 6000);
  };

  const stopAutoSlide = () => clearInterval(autoSlide);

  prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  // Initialize
  showSlide(index);
  startAutoSlide();
});




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