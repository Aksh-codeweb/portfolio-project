// Create floating coffee beans animation
function createCoffeeBeans() {
  const container = document.getElementById("coffee-beans");
  const beanCount = 20;

  for (let i = 0; i < beanCount; i++) {
    const bean = document.createElement("div");
    bean.classList.add("bean");

    // Random position and size
    const size = Math.random() * 20 + 10;
    const left = Math.random() * 100;
    const delay = Math.random() * 15;

    bean.style.width = `${size}px`;
    bean.style.height = `${size}px`;
    bean.style.left = `${left}%`;
    bean.style.animationDelay = `${delay}s`;

    container.appendChild(bean);
  }
}

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenuBtn.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Navigation
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("data-page");
    const targetSection = document.getElementById(targetId);

    if (!targetSection) return;

    // Update active link
    document
      .querySelectorAll(".nav-links a")
      .forEach((a) => a.classList.remove("active"));
    this.classList.add("active");

    // Close mobile menu if open
    navLinks.classList.remove("active");
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    // Scroll to target section
    window.scrollTo({
      top: targetSection.offsetTop - 80,
      behavior: "smooth",
    });
  });
});

// Menu tabs functionality
const tabBtns = document.querySelectorAll(".tab-btn");
const menuCategories = document.querySelectorAll(".menu-category");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons and categories
    tabBtns.forEach((b) => b.classList.remove("active"));
    menuCategories.forEach((c) => c.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");

    // Show corresponding category
    const categoryId = btn.getAttribute("data-category");
    const categoryElement = document.getElementById(categoryId);
    if (categoryElement) {
      categoryElement.classList.add("active");
    }
  });
});

// Carousel functionality
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".carousel-dot");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");

if (carousel && items.length > 0) {
  let currentIndex = 0;
  const itemCount = items.length;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update dots
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % itemCount;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + itemCount) % itemCount;
    updateCarousel();
  }

  // Auto slide
  let slideInterval = setInterval(nextSlide, 5000);

  // Event listeners
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      clearInterval(slideInterval);
      nextSlide();
      slideInterval = setInterval(nextSlide, 5000);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      clearInterval(slideInterval);
      prevSlide();
      slideInterval = setInterval(nextSlide, 5000);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(slideInterval);
      currentIndex = index;
      updateCarousel();
      slideInterval = setInterval(nextSlide, 5000);
    });
  });
}

// Modal functionality
const orderBtn = document.querySelector(".order-btn");
const modal = document.getElementById("order-modal");
const closeBtn = document.querySelector(".close-btn");
const orderForm = document.getElementById("order-form");

if (orderBtn && modal) {
  orderBtn.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

function closeModal() {
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

if (orderForm) {
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Order placed successfully! We will prepare it for pickup soon.");
    orderForm.reset();
    closeModal();
  });
}

// Contact form submission
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    this.reset();
  });
}

// Newsletter form submission
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    this.reset();
  });
}

// Menu item hover effect
const menuItems = document.querySelectorAll(".menu-table tr");
menuItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.backgroundColor = "#FFF8E1";
  });

  item.addEventListener("mouseleave", () => {
    item.style.backgroundColor = "";
  });
});

// Animate elements on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".menu-table, .contact-info, .map-container, .about-section, .contact-form"
  );

  elements.forEach((element) => {
    const position = element.getBoundingClientRect();

    // If element is in viewport
    if (position.top < window.innerHeight - 100) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    }
  });
}

// Set initial state for animated elements
document
  .querySelectorAll(
    ".menu-table, .contact-info, .map-container, .about-section, .contact-form"
  )
  .forEach((element) => {
    element.style.opacity = 0;
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });

// Create coffee beans animation
createCoffeeBeans();

// Listen for scroll events
window.addEventListener("scroll", animateOnScroll);
// Initial check
window.addEventListener("load", animateOnScroll);
